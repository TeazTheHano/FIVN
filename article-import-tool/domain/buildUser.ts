import fs from "fs"
import axios from "axios"
import { randomUUID } from "crypto"
import { ADMIN_CREATE_ID, LANGUAGE_ID, MERCHANT_ID } from "../variable"
import downloadImage from "../image/download"
import uploadImage from "../image/upload"
export interface UserInput {
    Name: string
    Email: string
    Password?: string
    SubDescription?: string
    Description?: string
    Mobile?: string
    AllType?: number
    ImgLink?: string
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
            MerchantId: MERCHANT_ID
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
export default async function buildUser(
    item: UserInput,
    options?: { passwordDefault: string, typeDefault: number }
) {
    /**
 * 1️⃣ Check user exist
 */
    let userId = await checkUserExist(item.Email)
    if (userId) {
        console.log("⚠ User đã tồn tại:", item.Email)
        return null
    } else {
        userId = randomUUID()
    }
    /**
 * 2️⃣ Upload image nếu có
 */
    const imageId = await processImage(item.ImgLink)
    /**
 * 3️⃣ Build payload
 */
    return {
        Id: userId,
        MerchantId: MERCHANT_ID,
        Name: item.Name,
        Password:
            item.Password ??
            options?.passwordDefault ??
            "123456",
        LanguageId: LANGUAGE_ID,
        Email: item.Email,
        Mobile: item.Mobile || "0123456789",
        SubDescription: item.SubDescription,
        Description: item.Description,
        AllType:
            item.AllType ??
            options?.typeDefault ??
            1,
        Categories: [],
        Images:
            imageId
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
        CreatedBy: ADMIN_CREATE_ID
    }
}