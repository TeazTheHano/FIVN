"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = buildUser;
const fs_1 = __importDefault(require("fs"));
const axios_1 = __importDefault(require("axios"));
const crypto_1 = require("crypto");
const variable_1 = require("../variable");
const download_1 = __importDefault(require("../image/download"));
const upload_1 = __importDefault(require("../image/upload"));
const CHECK_USER_ENDPOINT = "https://apicommand.izzi.asia/User/CheckUserExist";
/**
* Cache email -> userId
* tránh gọi API lặp lại
*/
const emailCache = new Map();
async function checkUserExist(email) {
    if (emailCache.has(email)) {
        return emailCache.get(email) || null;
    }
    try {
        const payload = {
            Field: "email",
            Value: email,
            MerchantId: variable_1.MERCHANT_ID
        };
        const res = await axios_1.default.post(CHECK_USER_ENDPOINT, payload);
        if (!res.data?.Success) {
            throw new Error("CheckUserExist failed");
        }
        const userId = res.data.Data || null;
        emailCache.set(email, userId);
        return userId;
    }
    catch (err) {
        console.error("✖ CheckUserExist error:", email);
        return null;
    }
}
async function processImage(imgLink) {
    if (!imgLink)
        return null;
    try {
        const localPath = await (0, download_1.default)(imgLink);
        const imageId = await (0, upload_1.default)(localPath);
        fs_1.default.unlinkSync(localPath);
        console.log("✔ Upload ảnh:", imageId);
        return imageId;
    }
    catch (err) {
        console.log("⚠ Retry upload ảnh...");
        try {
            const localPath = await (0, download_1.default)(imgLink);
            const imageId = await (0, upload_1.default)(localPath);
            fs_1.default.unlinkSync(localPath);
            return imageId;
        }
        catch (error) {
            console.error("✖ Upload ảnh thất bại:", error);
            return null;
        }
    }
}
async function buildUser(item, options) {
    /**
 * 1️⃣ Check user exist
 */
    let existingUserId = await checkUserExist(item.Email);
    let userId = (0, crypto_1.randomUUID)();
    /**
 * 2️⃣ Upload image nếu có
 */
    const imageId = await processImage(item.ImgLink);
    /**
 * 3️⃣ Build payload
 */
    const user = {
        Id: userId,
        // MerchantId: MERCHANT_ID,
        MerchantId: variable_1.MERCHANT_ID,
        Name: item.Name,
        Password: item.Password ?? options?.passwordDefault ?? "123456",
        LanguageId: variable_1.LANGUAGE_ID,
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
        CreatedBy: variable_1.ADMIN_CREATE_ID,
        ...(item.Code && {
            Code: item.Code
        }),
        ...(item.IdentifyAddress && {
            IdentifyAddress: item.IdentifyAddress
        }),
    };
    // xử lý type/category
    if (options?.useTypeOrCategoryOrNone === "type") {
        user.AllType = item.AllType ?? options?.typeDefault ?? 1;
    }
    if (options?.useTypeOrCategoryOrNone === "category") {
        const cateIds = item.CateId?.length
            ? item.CateId
            : options?.cateIdForAll
                ? [options.cateIdForAll]
                : [];
        user.Categories = cateIds.map(id => ({
            Id: id,
            IsFeatured: true,
            DisplayOrder: 0
        }));
    }
    console.log("existingUserId: ", existingUserId);
    console.log("user email: ", user.Email);
    return user;
}
