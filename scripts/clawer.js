export const MerchantId = '5845210a-c1f3-4699-b6ad-eefc96d23e8f'

export const commandLink = 'https://apicommand.izzi.asia/Command/SendSync'

let example = {
    "CommandName": "CreateArticleVersion01",
    "Domain": "Article",
    "Content": `{
        \"Id\":\"eeb6d2fe-2cad-fa51-4bde-34f98cb69a0f\",
        \"MerchantId\":\"xxxxxxxx\",
        \"Name\":\"Tiêu đề 12345\",
        \"SubDescription\":\"Trích dẫn 12345\",
        \"Description\":\"<p>adsfasdf &aacute;df &aacute;df &agrave; &aacute;df &aacute;df ầ sdfasasf &aacute;</p>\\n\\n<p><strong>&agrave; &aacute;df &aacute;df</strong></p>\\n\",
        \"FriendlyUrl\":\"tieu-de-12345\",
        \"MetaName\":\"meta tên 12345\",
        \"MetaKeyword\":\"meta từ khóa 12345, meta từ khóa 789\",
        \"MetaDescription\":\"meta mô tả 12345\",
        \"MetaImage\":\"https://static.izzi.asia/images/2020/1/14/2001148301_IZZIBusiness.22048px.jpg\",
        \"Categories\":[
            {
                \"Id\":\"89a3995d-a667-ff2b-0527-e1fb836557b3\",
                \"IsFeatured\":true,
                \"DisplayOrder\":0
            },{
                \"Id\":\"63f4c9fe-2597-30f2-4966-9e9405e75290\",
                \"IsFeatured\":true,
                \"DisplayOrder\":1
            }
        ],
        \"Images\":[
            {
                \"Id\":\"612d7444-6e6d-4bb3-a265-65f2cc95e2ab\",
                \"IsFeatured\":false,
                \"DisplayOrder\":0
            }
        ],
        \"Authors\":[],
        \"PostTime\":\"2026-03-03T08:12:38.333Z\",
        \"Files\":[],
        \"LanguageId\":\"838aef56-78bb-11e6-b5a6-00155d582814\",
        \"CreatedDate\":\"03-03-2026 15:14:33\",
        \"CreatedBy\":\"8597b32b-7c62-bea2-11e0-fa185758c3b6\",
        \"ModifiedDate\":\"03-03-2026 15:14:33\",
        \"ModifiedBy\":\"8597b32b-7c62-bea2-11e0-fa185758c3b6\",
        \"CommandInformation\":\"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36\",
        \"Products\":[]
    }`,
    "TimeOutSecond": 7
}