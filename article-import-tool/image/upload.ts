import fs from "fs"
import path from "path"
import axios, { AxiosError } from "axios"
import FormData from "form-data"
import { DOMAIN_IMAGE_CONSTANT } from "../variable"
import delay from "../utils/delay"

const EMPTY_GUID = "00000000-0000-0000-0000-000000000000"

async function uploadImage(localPath: string): Promise<string> {
    for (let attempt = 1; attempt <= 3; attempt++) {
        try {
            const form = new FormData()

            form.append("token", DOMAIN_IMAGE_CONSTANT.UPLOAD_TOKEN)

            form.append(
                "UploadedImage",
                fs.createReadStream(localPath),
                {
                    filename: path.basename(localPath),
                    contentType: require("mime-types").lookup(localPath) || "image/jpeg"
                }
            )

            const res = await axios.post(DOMAIN_IMAGE_CONSTANT.UPLOAD_IMAGE_LINK, form, {
                headers: {
                    ...form.getHeaders(),
                    "User-Agent": "Mozilla/5.0",
                    "Accept": "application/json"
                },
                timeout: 60000
            })

            const imageId = res.data?.Data?.[0]?.Id

            if (
                res.data?.Success &&
                imageId &&
                imageId !== EMPTY_GUID
            ) {
                return imageId
            }

            console.log(`⚠ Upload attempt ${attempt} trả Guid.Empty`)

        } catch (err) {
            console.log(`⚠ Upload attempt ${attempt} lỗi`, err)
        }

        await delay(2000)
    }

    throw new Error("Upload thất bại sau 3 lần thử")
}

export default uploadImage