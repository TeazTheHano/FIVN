let x = {
    "CommandName": "CreateCustomerWithAttributes",

    "Domain": "User",

    "Content": `{
    \"Id\":\"8272e54d-3170-ffe8-3bd1-66998d61953e\",

    \"MerchantId\":\"5845210a-c1f3-4699-b6ad-eefc96d23e8f\",
    \"Name\":\"test1\",
    \"Password\":\"123456\",
    \"LanguageId\":\"838aef56-78bb-11e6-b5a6-00155d582814\",
    \"Email\":\"test1@congnghe.co\",
    \"Mobile\":\"0987654321\",
    \"SubDescription\":\"https://viod.labo.io/vi-VN\",
    \"Description\":\"<p>mô tả</p>\",
    \"AllType\":64,
    \"Categories\":[],
    \"Images\":[{\"Id\":\"f3aecd6d-0494-4401-b824-fa392cf9f95d\",
    \"IsFeatured\":false,
    \"DisplayOrder\":0}],
    \"AttributeValues\":[],
    \"CreatedDate\":\"03-05-2026 10:42:57\",
    \"CreatedBy\":\"8597b32b-7c62-bea2-11e0-fa185758c3b6\"}`,

    "TimeOutSecond": 20
}

let y = {
    "CommandName": "CreateCustomerWithAttributes",
    "Domain": "User",
    "Content": `{
        \"Id\":\"8b047cc6-7e1b-1df0-8e70-2c8bf6dd57bb\",
        \"MerchantId\":\"5845210a-c1f3-4699-b6ad-eefc96d23e8f\",
        \"Name\":\"tessttt\",
        \"Password\":\"123456\",
        \"LanguageId\":\"838aef56-78bb-11e6-b5a6-00155d582814\",
        \"Email\":\"taasdfasf@x.com\",
        \"Mobile\":\"234123412341\",
        \"SubDescription\":\"fasdsdafas dfasdas\",
        \"Description\":\"<p>asdf asdfasdf asdafd</p>\",
        \"AllType\":64,
        \"Categories\":[],
        \"Images\":[
            {
                \"Id\":\"6c0916d1-c877-4813-9d46-0a2a09893f90\",
                \"IsFeatured\":true,
                \"DisplayOrder\":0
            },
            {
                \"Id\":\"1a41cd51-8d6b-48eb-bb17-89fb55375a3e\",
                \"IsFeatured\":false,
                \"DisplayOrder\":1
            }
        ],
        \"AttributeValues\":[],
        \"CreatedDate\":\"03-06-2026 12:18:23\",
        \"CreatedBy\":\"8597b32b-7c62-bea2-11e0-fa185758c3b6\"
        }`,
    "TimeOutSecond": 20
}

let xxx = "https://apicommand.izzi.asia/User/CheckUserExist"
let checkExist = {
    "Field": "email",
    "Value": "taasdfasf@x.com",
    "MerchantId": "5845210a-c1f3-4699-b6ad-eefc96d23e8f"
}