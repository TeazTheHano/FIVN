import fs from "fs"
import path from "path"
import axios, { AxiosError } from "axios"
import FormData from "form-data"
import { randomUUID } from "crypto"
import dataX from "./data"
import sharp from "sharp"


const MerchantId = "5845210a-c1f3-4699-b6ad-eefc96d23e8f"

const commandLink = "https://apicommand.izzi.asia/Command/SendSync"
const uploadImageLink = "https://apicommand.izzi.asia/Image/UploadFile"
const UPLOAD_TOKEN = "0f1ee0ca-2d83-4ca7-bcff-8aed37256df3-8597b32b-7c62-bea2-11e0-fa185758c3b6";

const POST_CATE_ID = "62384618-4e7c-0008-18e0-db03370b979d"
const COURSE_CATE_ID = "89a3995d-a667-ff2b-0527-e1fb836557b3"
const MENTOR_CATE_ID = "e618564c-bdf8-4399-ad7a-5118e6d9b2ba"

const LANGUAGE_ID = "838aef56-78bb-11e6-b5a6-00155d582814"
const ADMIN_CREATE_ID = "8597b32b-7c62-bea2-11e0-fa185758c3b6"

const FRIENDLY_URL_mentor = "mentor-"
const FRIENDLY_URL_post = "post-"
const FRIENDLY_URL_course = "course-"



// ================= TYPES =================

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

interface CreateArticleOptions {
    domainToCreate?: string
    friendlyUrlPrefix?: string
    articlesToCreate: ArticleInput[]
    cateIdForAll?: string
}

interface UploadImageResponse {
    Success: boolean
    Data: {
        Id: string
        Name: string
        Path: string
        Message: string
    }[]
}

// ================= UTILS =================

const formatDate = (date: Date): string => {
    const pad = (n: number) => n.toString().padStart(2, "0")
    return `${pad(date.getDate())}-${pad(date.getMonth() + 1)}-${date.getFullYear()} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`
}

const slugify = (str: string): string =>
    str
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/[^a-z0-9 ]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .trim()

const delay = (ms: number): Promise<void> =>
    new Promise(resolve => setTimeout(resolve, ms))

// ================= IMAGE =================


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

const EMPTY_GUID = "00000000-0000-0000-0000-000000000000"

async function uploadImage(localPath: string): Promise<string> {
    for (let attempt = 1; attempt <= 3; attempt++) {
        try {
            const form = new FormData()

            form.append("token", UPLOAD_TOKEN)

            form.append(
                "UploadedImage",
                fs.createReadStream(localPath),
                {
                    filename: path.basename(localPath),
                    contentType: require("mime-types").lookup(localPath) || "image/jpeg"
                }
            )

            const res = await axios.post(uploadImageLink, form, {
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

// ================= RETRY =================

async function retryRequest<T>(
    fn: () => Promise<T>,
    retries = 3,
    delayMs = 5000
): Promise<T> {
    let lastError: unknown

    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            return await fn()
        } catch (error: unknown) {
            lastError = error

            if (axios.isAxiosError(error)) {
                const status = error.response?.status

                if (status && status >= 400 && status < 500) {
                    throw error
                }
            }

            if (attempt < retries) {
                console.log(`⚠ Retry ${attempt}/${retries} sau ${delayMs}ms...`)
                await delay(delayMs)
            }
        }
    }

    throw lastError
}

// ================= MAIN =================

async function createArticles({
    domainToCreate = "Article",
    friendlyUrlPrefix = FRIENDLY_URL_mentor,
    articlesToCreate,
    cateIdForAll = POST_CATE_ID
}: CreateArticleOptions): Promise<void> {

    for (const [index, item] of articlesToCreate.entries()) {
        const now = new Date()
        let imageId: string | null = null

        console.log(`\n[${index + 1}/${articlesToCreate.length}] ${item.Name}`)

        // Upload image
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

        const article = {
            Id: randomUUID(),
            MerchantId,
            Name: item.Name,
            SubDescription: item.SubDescription,
            Description: item.Description,
            FriendlyUrl: `${friendlyUrlPrefix}${slugify(item.Name)}-${Date.now()}`,
            MetaName: item.MetaName,
            MetaKeyword: item.MetaKeyword,
            MetaDescription: item.MetaDescription,
            MetaImage: item.MetaImage,
            Categories:
                item.CateId?.length
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
            Files: [],
            LanguageId: LANGUAGE_ID,
            CreatedDate: item.CreatedDate || formatDate(now),
            CreatedBy: ADMIN_CREATE_ID,
            ModifiedDate: item.ModifiedDate || formatDate(now),
            ModifiedBy: ADMIN_CREATE_ID,
            CommandInformation: "Mozilla/5.0",
            Products: []
        }

        const payload = {
            CommandName: "CreateArticleVersion01",
            Domain: domainToCreate,
            Content: JSON.stringify(article),
            TimeOutSecond: 30
        }

        try {
            const res = await retryRequest(() =>
                axios.post(commandLink, payload, { timeout: 35000 })
            )

            console.log("✔ Tạo bài thành công:", res.data)
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                console.error("✖ Lỗi:", error.response?.data)
            } else {
                console.error("✖ Unknown error:", error)
            }
        }

        await delay(3000)
    }

    console.log("\n🎉 Hoàn tất import.")
}

// run

createArticles({
    domainToCreate: "Article",
    friendlyUrlPrefix: FRIENDLY_URL_course,
    articlesToCreate: dataX,
    cateIdForAll: COURSE_CATE_ID
})