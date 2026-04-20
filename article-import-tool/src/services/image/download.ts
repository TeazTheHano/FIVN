import fs from "fs"
import path from "path"
import axios from "axios"
import { randomUUID } from "crypto"
import sharp from "sharp"

async function downloadImage(url: string): Promise<string> {
    const dir = path.join(__dirname, "images")
    if (!fs.existsSync(dir)) fs.mkdirSync(dir)

    const response = await axios.get<ArrayBuffer>(url, {
        responseType: "arraybuffer",
        headers: {
            "User-Agent": "Mozilla/5.0",
            "Accept": "image/*"
        }
    })

    const filePath = path.join(dir, `${randomUUID()}.jpg`)

    // 🔥 Re-encode thành JPEG chuẩn baseline
    await sharp(Buffer.from(response.data))
        .jpeg({ quality: 90, mozjpeg: false })
        .toFile(filePath)

    return filePath
}

export default downloadImage