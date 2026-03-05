"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const axios_1 = __importDefault(require("axios"));
const form_data_1 = __importDefault(require("form-data"));
const crypto_1 = require("crypto");
const data_1 = __importDefault(require("./data"));
const sharp_1 = __importDefault(require("sharp"));
const MerchantId = "5845210a-c1f3-4699-b6ad-eefc96d23e8f";
const commandLink = "https://apicommand.izzi.asia/Command/SendSync";
const uploadImageLink = "https://apicommand.izzi.asia/Image/UploadFile";
const UPLOAD_TOKEN = "0f1ee0ca-2d83-4ca7-bcff-8aed37256df3-8597b32b-7c62-bea2-11e0-fa185758c3b6";
const POST_CATE_ID = "62384618-4e7c-0008-18e0-db03370b979d";
const COURSE_CATE_ID = "89a3995d-a667-ff2b-0527-e1fb836557b3";
const MENTOR_CATE_ID = "e618564c-bdf8-4399-ad7a-5118e6d9b2ba";
const LANGUAGE_ID = "838aef56-78bb-11e6-b5a6-00155d582814";
const ADMIN_CREATE_ID = "8597b32b-7c62-bea2-11e0-fa185758c3b6";
const FRIENDLY_URL_mentor = "mentor-";
const FRIENDLY_URL_post = "post-";
const FRIENDLY_URL_course = "course-";
// ================= UTILS =================
const formatDate = (date) => {
    const pad = (n) => n.toString().padStart(2, "0");
    return `${pad(date.getDate())}-${pad(date.getMonth() + 1)}-${date.getFullYear()} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
};
const slugify = (str) => str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
// ================= IMAGE =================
async function downloadImage(url) {
    const dir = path_1.default.join(__dirname, "images");
    if (!fs_1.default.existsSync(dir))
        fs_1.default.mkdirSync(dir);
    const response = await axios_1.default.get(url, {
        responseType: "arraybuffer",
        headers: {
            "User-Agent": "Mozilla/5.0",
            "Accept": "image/*"
        }
    });
    const filePath = path_1.default.join(dir, `${(0, crypto_1.randomUUID)()}.jpg`);
    // 🔥 Re-encode thành JPEG chuẩn baseline
    await (0, sharp_1.default)(Buffer.from(response.data))
        .jpeg({ quality: 90, mozjpeg: false })
        .toFile(filePath);
    return filePath;
}
const EMPTY_GUID = "00000000-0000-0000-0000-000000000000";
async function uploadImage(localPath) {
    for (let attempt = 1; attempt <= 3; attempt++) {
        try {
            const form = new form_data_1.default();
            form.append("token", UPLOAD_TOKEN);
            form.append("UploadedImage", fs_1.default.createReadStream(localPath), {
                filename: path_1.default.basename(localPath),
                contentType: require("mime-types").lookup(localPath) || "image/jpeg"
            });
            const res = await axios_1.default.post(uploadImageLink, form, {
                headers: {
                    ...form.getHeaders(),
                    "User-Agent": "Mozilla/5.0",
                    "Accept": "application/json"
                },
                timeout: 60000
            });
            const imageId = res.data?.Data?.[0]?.Id;
            if (res.data?.Success &&
                imageId &&
                imageId !== EMPTY_GUID) {
                return imageId;
            }
            console.log(`⚠ Upload attempt ${attempt} trả Guid.Empty`);
        }
        catch (err) {
            console.log(`⚠ Upload attempt ${attempt} lỗi`, err);
        }
        await delay(2000);
    }
    throw new Error("Upload thất bại sau 3 lần thử");
}
// ================= RETRY =================
async function retryRequest(fn, retries = 3, delayMs = 5000) {
    let lastError;
    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            return await fn();
        }
        catch (error) {
            lastError = error;
            if (axios_1.default.isAxiosError(error)) {
                const status = error.response?.status;
                if (status && status >= 400 && status < 500) {
                    throw error;
                }
            }
            if (attempt < retries) {
                console.log(`⚠ Retry ${attempt}/${retries} sau ${delayMs}ms...`);
                await delay(delayMs);
            }
        }
    }
    throw lastError;
}
// ================= MAIN =================
async function createArticles({ domainToCreate = "Article", friendlyUrlPrefix = FRIENDLY_URL_mentor, articlesToCreate, cateIdForAll = POST_CATE_ID }) {
    for (const [index, item] of articlesToCreate.entries()) {
        const now = new Date();
        let imageId = null;
        console.log(`\n[${index + 1}/${articlesToCreate.length}] ${item.Name}`);
        // Upload image
        if (item.ImgLink) {
            try {
                const localPath = await downloadImage(item.ImgLink);
                imageId = await uploadImage(localPath);
                fs_1.default.unlinkSync(localPath);
                console.log("✔ Upload ảnh:", imageId);
            }
            catch (error) {
                console.error("✖ Lỗi xử lý ảnh:", error);
            }
        }
        const article = {
            Id: (0, crypto_1.randomUUID)(),
            MerchantId,
            Name: item.Name,
            SubDescription: item.SubDescription,
            Description: item.Description,
            FriendlyUrl: `${friendlyUrlPrefix}${slugify(item.Name)}-${Date.now()}`,
            MetaName: item.MetaName,
            MetaKeyword: item.MetaKeyword,
            MetaDescription: item.MetaDescription,
            MetaImage: item.MetaImage,
            Categories: item.CateId?.length
                ? item.CateId.map(id => ({
                    Id: id,
                    IsFeatured: true,
                    DisplayOrder: 0
                }))
                : [{
                        Id: cateIdForAll,
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
            Files: [],
            LanguageId: LANGUAGE_ID,
            CreatedDate: item.CreatedDate || formatDate(now),
            CreatedBy: ADMIN_CREATE_ID,
            ModifiedDate: item.ModifiedDate || formatDate(now),
            ModifiedBy: ADMIN_CREATE_ID,
            CommandInformation: "Mozilla/5.0",
            Products: []
        };
        const payload = {
            CommandName: "CreateArticleVersion01",
            Domain: domainToCreate,
            Content: JSON.stringify(article),
            TimeOutSecond: 30
        };
        try {
            const res = await retryRequest(() => axios_1.default.post(commandLink, payload, { timeout: 35000 }));
            console.log("✔ Tạo bài thành công:", res.data);
        }
        catch (error) {
            if (axios_1.default.isAxiosError(error)) {
                console.error("✖ Lỗi:", error.response?.data);
            }
            else {
                console.error("✖ Unknown error:", error);
            }
        }
        await delay(3000);
    }
    console.log("\n🎉 Hoàn tất import.");
}
// run
createArticles({
    domainToCreate: "Article",
    friendlyUrlPrefix: FRIENDLY_URL_course,
    articlesToCreate: data_1.default,
    cateIdForAll: COURSE_CATE_ID
});
