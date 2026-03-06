import fs from "fs"
import { randomUUID } from "crypto"
import { ADMIN_CREATE_ID, LANGUAGE_ID, MERCHANT_ID } from "../variable"
import slugify from "../utils/slugify"
import formatDate from "../utils/formatDate"
import downloadImage from "../image/download"
import uploadImage from "../image/upload"


export interface ArticleInput {
    Name: string
    SubDescription?: string
    Description?: string
    MetaName?: string
    MetaKeyword?: string
    MetaDescription?: string
    MetaImage?: string
    CateId?: string[]
    ImgLink?: string
    PostTime?: string
    CreatedDate?: string
    ModifiedDate?: string
}

export default async function buildArticle(item: ArticleInput, options?: { friendlyUrlPrefix?: string, cateIdForAll?: string }) {

    const now = new Date()
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
        SubDescription: item.SubDescription,
        Description: item.Description,
        FriendlyUrl: `${options?.friendlyUrlPrefix || ''}${slugify(item.Name)}-${Date.now()}`,
        MetaName: item.MetaName,
        MetaKeyword: item.MetaKeyword,
        MetaDescription: item.MetaDescription,
        Categories:
            item.CateId?.length
                ? item.CateId.map(id => ({
                    Id: id,
                    IsFeatured: true,
                    DisplayOrder: 0
                }))
                : [{
                    Id: options?.cateIdForAll,
                    IsFeatured: true,
                    DisplayOrder: 0
                }],
        Images:
            imageId
                ? [{
                    Id: imageId,
                    IsFeatured: false,
                    DisplayOrder: 0
                }]
                : [],
        Authors: [],
        PostTime: item.PostTime || now.toISOString(),
        LanguageId: LANGUAGE_ID,
        CreatedDate: item.CreatedDate || formatDate(now),
        CreatedBy: ADMIN_CREATE_ID,
        ModifiedDate: item.ModifiedDate || formatDate(now),
        ModifiedBy: ADMIN_CREATE_ID,
        CommandInformation: "Mozilla/5.0",
        Products: []
    }
}