import fs from "fs"
import { randomUUID } from "crypto"
import { ADMIN_CREATE_ID, LANGUAGE_ID, MERCHANT_ID } from "../variable"
import slugify from "../utils/slugify"
import formatDate from "../utils/formatDate"
import downloadImage from "../image/download"
import uploadImage from "../image/upload"
import runImport from "../core/runImport"

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
export default async function buildUser(item: UserInput, options?: { passwordDefault: string, typeDefault: number }) {

    // // Check for existing email
    // const checkEmailPayload = {
    //     Field: "email",
    //     Value: item.Email,
    //     MerchantId: MERCHANT_ID,
    // }

    // runImport({
    //     buildPayload: () => checkEmailPayload,
    //     data: [checkEmailPayload],
    //     option: {},
    //     commandName: "CheckEmail",
    //     domain: "User"
    // })

    let imageId: string | null = null
    if (item.ImgLink) {
        try {
            const localPath = await downloadImage(item.ImgLink)
            imageId = await uploadImage(localPath)
            fs.unlinkSync(localPath)
            console.log("✔ Upload ảnh:", imageId)
        } catch (error: unknown) {
            console.error("✖ Lỗi xử lý ảnh:", error)
        }
    }

    return {
        Id: randomUUID(),
        MerchantId: MERCHANT_ID,
        Name: item.Name,
        Password: item.Password ? item.Password : options?.passwordDefault || "123456",
        LanguageId: LANGUAGE_ID,
        Email: item.Email,
        Mobile: item.Mobile || "0123456789",
        SubDescription: item.SubDescription,
        Description: item.Description,
        AllType: item.AllType ? item.AllType : options?.typeDefault || 1,
        Categories: [],
        Images:
            imageId
                ? [{
                    Id: imageId,
                    IsFeatured: true,
                    DisplayOrder: 1
                }]
                : [],

        AttributeValues: [],
        CreatedDate: new Date(),
        CreatedBy: ADMIN_CREATE_ID,
    }
}