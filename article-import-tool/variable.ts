// export const MERCHANT_ID = "5845210a-c1f3-4699-b6ad-eefc96d23e8f"
export const MERCHANT_ID = '494ffd32-c6a4-4a9f-a68a-e9d8bbf8a80e'

export const COMMAND_LINK = "https://apicommand.izzi.asia/Command/SendSync"

export const LANGUAGE_ID = "838aef56-78bb-11e6-b5a6-00155d582814"
export const ADMIN_CREATE_ID = "8597b32b-7c62-bea2-11e0-fa185758c3b6"


export const DOMAIN_USER_CONSTANT = {
    DOMAIN: "User",

    COMMAND_NAME_CREATE: "CreateCustomerWithAttributes",
    COMMAND_NAME_UPDATE: "UpdateCustomerWithAttributes",

    CHECK_EMAIL_COMMAND_LINK: "https://apicommand.izzi.asia/User/CheckUserExist",

    Type_Author: 64,
}

export const DOMAIN_ARTICLE_CONSTANT = {
    DOMAIN: "Article",

    COMMAND_NAME_CREATE: "CreateArticleVersion01",
    COMMAND_NAME_UPDATE: "UpdateArticleVersion01",

    POST_CATE_ID: "62384618-4e7c-0008-18e0-db03370b979d",
    COURSE_CATE_ID: "89a3995d-a667-ff2b-0527-e1fb836557b3",
    MENTOR_CATE_ID: "e618564c-bdf8-4399-ad7a-5118e6d9b2ba",

    FRIENDLY_URL_mentor: "mentor-",
    FRIENDLY_URL_post: "post-",
    FRIENDLY_URL_course: "course-",
}

export const DOMAIN_IMAGE_CONSTANT = {
    UPLOAD_IMAGE_LINK: "https://apicommand.izzi.asia/Image/UploadFile",
    UPLOAD_TOKEN: "0f1ee0ca-2d83-4ca7-bcff-8aed37256df3-8597b32b-7c62-bea2-11e0-fa185758c3b6",
}

export const DOMAIN_NCC_CONSTANT = {
    MERCHANT_ID_theinner_techcombank_NCC: '494ffd32-c6a4-4a9f-a68a-e9d8bbf8a80e',

    GIANGPM_ID: '40a7f698-6ab9-4f9d-b0ab-01f735af4344',

    DOMAIN: "User",
    DOMAIN_ADDRESS: "Address",

    COMMAND_NAME_UPDATE: "UpdateSupplierUser",
    COMMAND_NAME_ADRESS_CREATE: "CreateResortAddress"

}

export const DOMAIN_QUIZ_CONSTANT = {
    DOMAIN: "Quiz",

    // Danh sách map type từ Data (string) sang API C# (number)
    // Centralize quản lý type để dễ dàng mở rộng sau này
    TYPE_MAP: {
        'true_false': 1,
        'single': 2,
        // 'multiple': 3, // VD có thể mở rộng sau này
        // 'fill_blank': 4,
    } as Record<string, number>
}