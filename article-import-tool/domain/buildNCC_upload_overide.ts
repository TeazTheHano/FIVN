import fs from "fs"
import axios from "axios"
import { randomUUID } from "crypto"
import { ADMIN_CREATE_ID, DOMAIN_NCC_CONSTANT, LANGUAGE_ID, MERCHANT_ID } from "../variable"
import downloadImage from "../image/download"
import uploadImage from "../image/upload"
import { findAddressIdByName } from "../utils/findIDs"
export interface NCCUserInput {
    Name: string
    Email: string
    Password?: string
    SubDescription?: string
    Description?: string
    Mobile?: string
    AllType?: number
    ImgLink?: string
    // Supplier
    CateId?: string[],
    Code?: string,
    IdentifyAddress?: string
}
const CHECK_USER_ENDPOINT = "https://apicommand.izzi.asia/User/CheckUserExist"
/**
* Cache email -> userId
* tránh gọi API lặp lại
*/
const emailCache = new Map<string, string | null>()
async function checkUserExist(email: string): Promise<string | null> {

    if (emailCache.has(email)) {
        return emailCache.get(email) || null
    }
    try {

        const payload = {
            Field: "email",
            Value: email,
            MerchantId: DOMAIN_NCC_CONSTANT.MERCHANT_ID_theinner_techcombank_NCC
            // TODO: change every use to each merchant
        }
        const res = await axios.post(CHECK_USER_ENDPOINT, payload)
        if (!res.data?.Success) {
            throw new Error("CheckUserExist failed")
        }
        const userId = res.data.Data || null
        emailCache.set(email, userId)
        return userId

    } catch (err) {

        console.error("✖ CheckUserExist error:", email)
        return null
    }
}
async function processImage(imgLink?: string): Promise<string | null> {

    if (!imgLink) return null
    try {
        const localPath = await downloadImage(imgLink)
        const imageId = await uploadImage(localPath)
        fs.unlinkSync(localPath)
        console.log("✔ Upload ảnh:", imageId)
        return imageId

    } catch (err) {

        console.log("⚠ Retry upload ảnh...")
        try {
            const localPath = await downloadImage(imgLink)
            const imageId = await uploadImage(localPath)
            fs.unlinkSync(localPath)
            return imageId

        } catch (error) {

            console.error("✖ Upload ảnh thất bại:", error)
            return null
        }
    }
}
export default async function buildNCCUser(
    item: NCCUserInput,
    options?: {
        passwordDefault: string,
        useTypeOrCategoryOrNone: "type" | "category" | "none",
        updateData?: boolean,
        updateDateAddress?: boolean,
        typeDefault: number,
        cateIdForAll?: string,
        useDummyEmailWithRandomAndPrefix?: string,
        addressGraphqlEndpoint?: string,
    }
) {
    /**
 * 1️⃣ Check user exist
 */
    let existingUserId = await checkUserExist(item.Email)
    let userId = randomUUID()

    /**
 * 2️⃣ Upload image nếu có
 */
    const imageId = await processImage(item.ImgLink)
    /**
 * 3️⃣ Build payload
 */
    const user: any = {
        Id: options?.updateData ? existingUserId : userId,
        // MerchantId: MERCHANT_ID,

        MerchantId: DOMAIN_NCC_CONSTANT.MERCHANT_ID_theinner_techcombank_NCC,

        Name: item.Name,
        Password: item.Password ?? options?.passwordDefault ?? "123456",
        LanguageId: LANGUAGE_ID,
        Email: existingUserId && options?.useDummyEmailWithRandomAndPrefix
            ? `${options?.useDummyEmailWithRandomAndPrefix}_${userId}@example.com`
            : item.Email ?? `${options?.useDummyEmailWithRandomAndPrefix}_${userId}@example.com`,
        Mobile: item.Mobile?.split(" ").join("") || "0123456789",
        SubDescription: item.SubDescription,
        Description: item.Description,


        Images: imageId
            ? [
                {
                    Id: imageId,
                    IsFeatured: true,
                    DisplayOrder: 1
                }
            ]
            : [],
        AttributeValues: [],
        CreatedDate: new Date(),
        CreatedBy: DOMAIN_NCC_CONSTANT.GIANGPM_ID,

        ...(item.Code && {
            Code: item.Code
        }),

        ...(item.IdentifyAddress && {
            IdentifyAddress: item.IdentifyAddress
        }),

        Addresses: [
            {
                Id: "",
                IsFeatured: true,
                DisplayOrder: 0
            }
        ],


    }

    if (options?.updateDateAddress && item.IdentifyAddress) {
        const addressId = await findAddressIdByName(item.IdentifyAddress, {
            endpoint: options?.addressGraphqlEndpoint,
            merchantId: DOMAIN_NCC_CONSTANT.MERCHANT_ID_theinner_techcombank_NCC,
            languageId: LANGUAGE_ID,
            limit: 10
        })

        if (addressId) {
            user.Addresses[0].Id = addressId
        } else {
            console.warn("⚠ Address not found:", item.IdentifyAddress)
        }
    }

    // xử lý type/category
    if (options?.useTypeOrCategoryOrNone === "type") {
        user.AllType = item.AllType ?? options?.typeDefault ?? 1
    }

    if (options?.useTypeOrCategoryOrNone === "category") {
        const cateIds = item.CateId?.length
            ? item.CateId
            : options?.cateIdForAll
                ? [options.cateIdForAll]
                : []

        user.Categories = cateIds.map(id => ({
            Id: id,
            IsFeatured: true,
            DisplayOrder: 0
        }))
    }
    console.log("existingUserId: ", existingUserId);
    console.log("user email: ", user.Email);

    return user
}
