import runImport from "../core/runImport"
import data from "../data/data"
import buildArticle from "../domain/buildArticle"
import buildNCCUser from "../domain/buildNCC_upload_overide"
import buildUser from "../domain/buildUser"
import buildAddress from "../domain/buildAddress"
import { DOMAIN_ARTICLE_CONSTANT, DOMAIN_NCC_CONSTANT, DOMAIN_USER_CONSTANT } from "../config"

const IMPORT_CONFIGS = {
    ARTICLE: {
        buildPayload: buildArticle,
        option: {
            friendlyUrlPrefix: DOMAIN_ARTICLE_CONSTANT.FRIENDLY_URL_mentor,
            cateIdForAll: DOMAIN_ARTICLE_CONSTANT.MENTOR_CATE_ID
        },
        commandName: DOMAIN_ARTICLE_CONSTANT.COMMAND_NAME_CREATE,
        domain: DOMAIN_ARTICLE_CONSTANT.DOMAIN
    },
    USER: {
        buildPayload: buildUser,
        option: {
            useTypeOrCategoryOrNone: "category",
            useDummyEmailWithRandomAndPrefix: "NCC"
        },
        commandName: "CreateSupplierUser", // có thể là DOMAIN_USER_CONSTANT.COMMAND_NAME_CREATE
        domain: DOMAIN_USER_CONSTANT.DOMAIN
    },
    ADDRESS: {
        buildPayload: buildAddress,
        option: undefined,
        commandName: DOMAIN_NCC_CONSTANT.COMMAND_NAME_ADRESS_CREATE,
        domain: DOMAIN_NCC_CONSTANT.DOMAIN_ADDRESS
    },
    NCC_USER: {
        buildPayload: buildNCCUser,
        option: {
            useTypeOrCategoryOrNone: "category",
            useDummyEmailWithRandomAndPrefix: "NCC2",
            updateData: true,
            updateDateAddress: true,
            addressGraphqlEndpoint: "https://apicms.izzi.asia/graphql/"
        },
        commandName: DOMAIN_NCC_CONSTANT.COMMAND_NAME_UPDATE,
        domain: DOMAIN_NCC_CONSTANT.DOMAIN
    }
}

// ⬇️ THAY ĐỔI CẤU HÌNH IMPORT TẠI ĐÂY ⬇️
const CURRENT_CONFIG: keyof typeof IMPORT_CONFIGS = "NCC_USER"

async function run() {
    const config = IMPORT_CONFIGS[CURRENT_CONFIG]

    if (!config) {
        console.error(`✖ Không tìm thấy cấu hình hợp lệ nào cho: ${CURRENT_CONFIG}`)
        return
    }

    console.log(`🚀 Bắt đầu chạy import với cấu hình: ${CURRENT_CONFIG}`)

    await runImport({
        buildPayload: config.buildPayload as any,
        data: data as any,
        option: config.option,
        commandName: config.commandName,
        domain: config.domain
    })

    console.log(`✅ Hoàn thành import cho cấu hình: ${CURRENT_CONFIG}`)
}

run()