"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const runImport_1 = __importDefault(require("./core/runImport"));
const data_1 = __importDefault(require("./data"));
const buildArticle_1 = __importDefault(require("./domain/buildArticle"));
const buildNCC_upload_overide_1 = __importDefault(require("./domain/buildNCC_upload_overide"));
const buildUser_1 = __importDefault(require("./domain/buildUser"));
const buildAddress_1 = __importDefault(require("./domain/buildAddress"));
const variable_1 = require("./variable");
const IMPORT_CONFIGS = {
    ARTICLE: {
        buildPayload: buildArticle_1.default,
        option: {
            friendlyUrlPrefix: variable_1.DOMAIN_ARTICLE_CONSTANT.FRIENDLY_URL_mentor,
            cateIdForAll: variable_1.DOMAIN_ARTICLE_CONSTANT.MENTOR_CATE_ID
        },
        commandName: variable_1.DOMAIN_ARTICLE_CONSTANT.COMMAND_NAME_CREATE,
        domain: variable_1.DOMAIN_ARTICLE_CONSTANT.DOMAIN
    },
    USER: {
        buildPayload: buildUser_1.default,
        option: {
            useTypeOrCategoryOrNone: "category",
            useDummyEmailWithRandomAndPrefix: "NCC"
        },
        commandName: "CreateSupplierUser", // có thể là DOMAIN_USER_CONSTANT.COMMAND_NAME_CREATE
        domain: variable_1.DOMAIN_USER_CONSTANT.DOMAIN
    },
    ADDRESS: {
        buildPayload: buildAddress_1.default,
        option: undefined,
        commandName: variable_1.DOMAIN_NCC_CONSTANT.COMMAND_NAME_ADRESS_CREATE,
        domain: variable_1.DOMAIN_NCC_CONSTANT.DOMAIN_ADDRESS
    },
    NCC_USER: {
        buildPayload: buildNCC_upload_overide_1.default,
        option: {
            useTypeOrCategoryOrNone: "category",
            useDummyEmailWithRandomAndPrefix: "NCC2",
            updateData: true,
            updateDateAddress: true,
            addressGraphqlEndpoint: "https://apicms.izzi.asia/graphql/"
        },
        commandName: variable_1.DOMAIN_NCC_CONSTANT.COMMAND_NAME_UPDATE,
        domain: variable_1.DOMAIN_NCC_CONSTANT.DOMAIN
    }
};
// ⬇️ THAY ĐỔI CẤU HÌNH IMPORT TẠI ĐÂY ⬇️
const CURRENT_CONFIG = "NCC_USER";
async function run() {
    const config = IMPORT_CONFIGS[CURRENT_CONFIG];
    if (!config) {
        console.error(`✖ Không tìm thấy cấu hình hợp lệ nào cho: ${CURRENT_CONFIG}`);
        return;
    }
    console.log(`🚀 Bắt đầu chạy import với cấu hình: ${CURRENT_CONFIG}`);
    await (0, runImport_1.default)({
        buildPayload: config.buildPayload,
        data: data_1.default,
        option: config.option,
        commandName: config.commandName,
        domain: config.domain
    });
    console.log(`✅ Hoàn thành import cho cấu hình: ${CURRENT_CONFIG}`);
}
run();
