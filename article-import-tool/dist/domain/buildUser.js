"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = buildUser;
const fs_1 = __importDefault(require("fs"));
const crypto_1 = require("crypto");
const variable_1 = require("../variable");
const download_1 = __importDefault(require("../image/download"));
const upload_1 = __importDefault(require("../image/upload"));
async function buildUser(item, options) {
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
    let imageId = null;
    if (item.ImgLink) {
        try {
            const localPath = await (0, download_1.default)(item.ImgLink);
            imageId = await (0, upload_1.default)(localPath);
            fs_1.default.unlinkSync(localPath);
            console.log("✔ Upload ảnh:", imageId);
        }
        catch (error) {
            console.error("✖ Lỗi xử lý ảnh:", error);
        }
    }
    return {
        Id: (0, crypto_1.randomUUID)(),
        MerchantId: variable_1.MERCHANT_ID,
        Name: item.Name,
        Password: item.Password ? item.Password : options?.passwordDefault || "123456",
        LanguageId: variable_1.LANGUAGE_ID,
        Email: item.Email,
        Mobile: item.Mobile || "0123456789",
        SubDescription: item.SubDescription,
        Description: item.Description,
        AllType: item.AllType ? item.AllType : options?.typeDefault || 1,
        Categories: [],
        Images: imageId
            ? [{
                    Id: imageId,
                    IsFeatured: true,
                    DisplayOrder: 1
                }]
            : [],
        AttributeValues: [],
        CreatedDate: new Date(),
        CreatedBy: variable_1.ADMIN_CREATE_ID,
    };
}
