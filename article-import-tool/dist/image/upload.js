"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const axios_1 = __importDefault(require("axios"));
const form_data_1 = __importDefault(require("form-data"));
const variable_1 = require("../variable");
const delay_1 = __importDefault(require("../utils/delay"));
const EMPTY_GUID = "00000000-0000-0000-0000-000000000000";
async function uploadImage(localPath) {
    for (let attempt = 1; attempt <= 3; attempt++) {
        try {
            const form = new form_data_1.default();
            form.append("token", variable_1.DOMAIN_IMAGE_CONSTANT.UPLOAD_TOKEN);
            form.append("UploadedImage", fs_1.default.createReadStream(localPath), {
                filename: path_1.default.basename(localPath),
                contentType: require("mime-types").lookup(localPath) || "image/jpeg"
            });
            const res = await axios_1.default.post(variable_1.DOMAIN_IMAGE_CONSTANT.UPLOAD_IMAGE_LINK, form, {
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
        await (0, delay_1.default)(2000);
    }
    throw new Error("Upload thất bại sau 3 lần thử");
}
exports.default = uploadImage;
