const axios = require("axios")

const MerchantId = '5845210a-c1f3-4699-b6ad-eefc96d23e8f'

const commandLink = 'https://apicommand.izzi.asia/Command/SendSync'

const { randomUUID } = require('crypto')

const POST_CATE_ID = "62384618-4e7c-0008-18e0-db03370b979d"
const COURSE_CATE_ID = "89a3995d-a667-ff2b-0527-e1fb836557b3"
const LANGUAGE_ID = "838aef56-78bb-11e6-b5a6-00155d582814"
const ADMIN_CREATE_ID = "8597b32b-7c62-bea2-11e0-fa185758c3b6"

const articlesToCreate = [
    { Name: "Bài viết test hàng loạt 21222", SubDescription: "1231231212312", Description: "hehehehe", MetaName: "", MetaKeyword: "", MetaDescription: "", MetaImage: "", CateId: POST_CATE_ID, },
    { Name: "Bài viết test hàng loạt 22222", SubDescription: "123123453251", Description: "123123", MetaName: "", MetaKeyword: "", MetaDescription: "", MetaImage: "", CateId: POST_CATE_ID, },
    { Name: "Bài viết test hàng loạt 23222", SubDescription: "132512341234123412345", Description: "542546", MetaName: "", MetaKeyword: "", MetaDescription: "", MetaImage: "", CateId: POST_CATE_ID, }
]
const formatDate = (date) => {
    // format to dd-mm-yyyy hh:mm:ss
    const pad = (n) => n.toString().padStart(2, '0')
    return `${pad(date.getDate())}-${pad(date.getMonth() + 1)}-${date.getFullYear()} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`
}

const slugify = (str) =>
    str
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/[^a-z0-9 ]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .trim();

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

async function retryRequest(fn, retries = 3, delayMs = 5000) {
    let lastError

    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            return await fn()
        } catch (err) {
            lastError = err

            const status = err.response?.status

            // Không retry nếu là lỗi 4xx
            if (status && status >= 400 && status < 500) {
                throw err
            }

            if (attempt < retries) {
                console.log(`⚠ Retry ${attempt}/${retries} sau ${delayMs}ms...`)
                await delay(delayMs)
            }
        }
    }

    throw lastError
}

async function createArticles() {
    for (const [index, item] of articlesToCreate.entries()) {
        const now = new Date()

        const article = {
            Id: randomUUID(),
            MerchantId: MerchantId,
            Name: item.Name,
            SubDescription: item.SubDescription,
            Description: item.Description,
            FriendlyUrl: `bai-viet-${slugify(item.Name)}-${Date.now()}`,
            MetaName: item.MetaName,
            MetaKeyword: item.MetaKeyword,
            MetaDescription: item.MetaDescription,
            MetaImage: item.MetaImage,
            Categories: [
                {
                    Id: item.CateId,
                    IsFeatured: true,
                    DisplayOrder: 0
                }
            ],
            Images: [],
            Authors: [],
            PostTime: item.PostTime || now.toISOString(),
            Files: [],
            LanguageId: LANGUAGE_ID,
            CreatedDate: item.CreatedDate || formatDate(now),
            CreatedBy: ADMIN_CREATE_ID,
            ModifiedDate: item.ModifiedDate || formatDate(now),
            ModifiedBy: ADMIN_CREATE_ID,
            CommandInformation:
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
            Products: []
        }

        const payload = {
            CommandName: "CreateArticleVersion01",
            Domain: "Article",
            Content: JSON.stringify(article),
            TimeOutSecond: 30
        }

        try {
            console.log(`\n[${index + 1}/${articlesToCreate.length}] Đang gửi: ${article.Name}`)

            const res = await retryRequest(
                () => axios.post(commandLink, payload, { timeout: 35000 }),
                3,
                5000
            )

            console.log("✔ Thành công:", res.data)

        } catch (err) {
            console.error("✖ Thất bại sau retry:", article.Name)
            console.error("Message:", err.message)

            if (err.response) {
                console.error("Status:", err.response.status)
                console.error("Data:", err.response.data)
            }
        }

        if (index < articlesToCreate.length - 1) {
            console.log("⏳ Chờ 3 giây trước bài tiếp theo...")
            await delay(3000)
        }
    }
}
createArticles()