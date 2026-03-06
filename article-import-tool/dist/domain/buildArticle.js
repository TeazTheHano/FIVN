"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = buildArticle;
const fs_1 = __importDefault(require("fs"));
const crypto_1 = require("crypto");
const variable_1 = require("../variable");
const slugify_1 = __importDefault(require("../utils/slugify"));
const formatDate_1 = __importDefault(require("../utils/formatDate"));
const download_1 = __importDefault(require("../image/download"));
const upload_1 = __importDefault(require("../image/upload"));
async function buildArticle(item, options) {
    const now = new Date();
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
        SubDescription: item.SubDescription,
        Description: item.Description,
        FriendlyUrl: `${options?.friendlyUrlPrefix || ''}${(0, slugify_1.default)(item.Name)}-${Date.now()}`,
        MetaName: item.MetaName,
        MetaKeyword: item.MetaKeyword,
        MetaDescription: item.MetaDescription,
        Categories: item.CateId?.length
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
        Images: imageId
            ? [{
                    Id: imageId,
                    IsFeatured: false,
                    DisplayOrder: 0
                }]
            : [],
        Authors: [],
        PostTime: item.PostTime || now.toISOString(),
        LanguageId: variable_1.LANGUAGE_ID,
        CreatedDate: item.CreatedDate || (0, formatDate_1.default)(now),
        CreatedBy: variable_1.ADMIN_CREATE_ID,
        ModifiedDate: item.ModifiedDate || (0, formatDate_1.default)(now),
        ModifiedBy: variable_1.ADMIN_CREATE_ID,
        CommandInformation: "Mozilla/5.0",
        Products: []
    };
}
