"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const axios_1 = __importDefault(require("axios"));
const crypto_1 = require("crypto");
const sharp_1 = __importDefault(require("sharp"));
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
exports.default = downloadImage;
