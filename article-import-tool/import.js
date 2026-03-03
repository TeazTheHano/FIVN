const axios = require("axios")

const MerchantId = '5845210a-c1f3-4699-b6ad-eefc96d23e8f'

const commandLink = 'https://apicommand.izzi.asia/Command/SendSync'

const { randomUUID } = require('crypto')

const articles = [
    {
        Id: randomUUID(),
        MerchantId: MerchantId,
        Name: "Tiêu đề test 111111111",
        SubDescription: "Trích dẫn test 1",
        Description: "<p>Nội dung test 1</p>",
        FriendlyUrl: "tieu-de-test-11111111",
        MetaName: "meta test 1",
        MetaKeyword: "keyword1",
        MetaDescription: "desc test 1",
        MetaImage: "",
        Categories: [],
        Images: [],
        Authors: [],
        PostTime: new Date().toISOString(),
        Files: [],
        LanguageId: "838aef56-78bb-11e6-b5a6-00155d582814",
        CreatedDate: "",
        CreatedBy: "8597b32b-7c62-bea2-11e0-fa185758c3b6",
        ModifiedDate: "",
        ModifiedBy: "8597b32b-7c62-bea2-11e0-fa185758c3b6",
        CommandInformation: "Import Tool",
        Products: []
    }
]

async function createArticles() {
    for (const article of articles) {
        const payload = {
            CommandName: "CreateArticleVersion01",
            Domain: "Article",
            Content: JSON.stringify(article),
            TimeOutSecond: 7
        }

        try {
            const res = await axios.post(commandLink, payload)
            console.log("✔ Thành công:", article.Name)
            console.log(res.data)
        } catch (err) {
            console.error("✖ Lỗi:", article.Name)
            console.error(err.response?.data || err.message)
        }
    }
}

createArticles()