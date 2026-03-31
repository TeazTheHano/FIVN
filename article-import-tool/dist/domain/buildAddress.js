"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = buildAdress;
const crypto_1 = require("crypto");
async function buildAdress(item) {
    const now = new Date();
    // let imageId: string | null = null
    // if (item.ImgLink) {
    //     try {
    //         const localPath = await downloadImage(item.ImgLink)
    //         imageId = await uploadImage(localPath)
    //         fs.unlinkSync(localPath)
    //         console.log("✔ Upload ảnh:", imageId)
    //     } catch (error: unknown) {
    //         console.error("✖ Lỗi xử lý ảnh:", error)
    //     }
    // }
    return {
        // Id: randomUUID(),
        // MerchantId: MERCHANT_ID,
        // Name: item.Name,
        // DetailAddress: item.DetailAddress || '',
        // Description: item.Description || '',
        // FriendlyUrl: item.FriendlyUrl,
        // Mobile: item.Mobile || '',
        // AttributeValues: item.AttributeValues || [],
        // Email: item.Email || '',
        // // Categories:
        // //     item.CateId?.length
        // //         ? item.CateId.map(id => ({
        // //             Id: id,
        // //             IsFeatured: true,
        // //             DisplayOrder: 0
        // //         }))
        // //         : [{
        // //             Id: options?.cateIdForAll,
        // //             IsFeatured: true,
        // //             DisplayOrder: 0
        // //         }],
        // Categories: [],
        // Images: [],
        //     // imageId
        //     //     ? [{
        //     //         Id: imageId,
        //     //         IsFeatured: false,
        //     //         DisplayOrder: 0
        //     //     }]
        //     //     : [],
        // LanguageId: LANGUAGE_ID,
        // CreatedDate: item.CreatedDate || formatDate(now),
        // CreatedBy: DOMAIN_NCC_CONSTANT.GIANGPM_ID,
        // ModifiedDate: item.ModifiedDate || formatDate(now),
        // ModifiedBy: DOMAIN_NCC_CONSTANT.GIANGPM_ID,
        Id: (0, crypto_1.randomUUID)(),
        MerchantId: "494ffd32-c6a4-4a9f-a68a-e9d8bbf8a80e",
        LanguageId: "838aef56-78bb-11e6-b5a6-00155d582814",
        Name: item.Name,
        DetailAddress: "",
        FriendlyUrl: item.FriendlyUrl,
        AttributeValues: [],
        Mobile: "",
        Email: "",
        CreatedDate: "03-27-2026 15:31:01",
        CreatedBy: "40a7f698-6ab9-4f9d-b0ab-01f735af4344",
        ModifiedDate: "03-27-2026 15:31:01",
        ModifiedBy: "40a7f698-6ab9-4f9d-b0ab-01f735af4344",
        Description: "",
        Images: [],
        Categories: []
    };
}
