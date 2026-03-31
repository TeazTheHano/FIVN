"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const runImport_1 = __importDefault(require("./core/runImport"));
const data_1 = __importDefault(require("./data"));
const buildNCC_upload_overide_1 = __importDefault(require("./domain/buildNCC_upload_overide"));
const variable_1 = require("./variable");
async function run() {
    // await runImport({
    //     buildPayload: buildArticle,
    //     data: data,
    //     option: {
    //         friendlyUrlPrefix: DOMAIN_ARTICLE_CONSTANT.FRIENDLY_URL_mentor,
    //         cateIdForAll: DOMAIN_ARTICLE_CONSTANT.MENTOR_CATE_ID
    //     },
    //     commandName: DOMAIN_ARTICLE_CONSTANT.COMMAND_NAME_CREATE,
    //     domain: DOMAIN_ARTICLE_CONSTANT.DOMAIN
    // })
    // await runImport({
    //     buildPayload: buildUser,
    //     data: data,
    //     option: {
    //         useTypeOrCategoryOrNone: "category",
    //         useDummyEmailWithRandomAndPrefix: "NCC"
    //     },
    //     // commandName: DOMAIN_USER_CONSTANT.COMMAND_NAME_CREATE,
    //     commandName: "CreateSupplierUser",
    //     domain: DOMAIN_USER_CONSTANT.DOMAIN
    // })
    // await runImport ({
    //     buildPayload: buildAdress,
    //     data: data,
    //     // commandName: DOMAIN_USER_CONSTANT.COMMAND_NAME_CREATE,
    //     commandName: DOMAIN_NCC_CONSTANT.COMMAND_NAME_ADRESS_CREATE,
    //     domain: DOMAIN_NCC_CONSTANT.DOMAIN_ADDRESS
    // })
    await (0, runImport_1.default)({
        buildPayload: buildNCC_upload_overide_1.default,
        data: data_1.default,
        option: {
            useTypeOrCategoryOrNone: "category",
            useDummyEmailWithRandomAndPrefix: "NCC2",
            updateData: true,
            updateDateAddress: true,
            addressGraphqlEndpoint: "https://apicms.izzi.asia/graphql/"
        },
        commandName: variable_1.DOMAIN_NCC_CONSTANT.COMMAND_NAME_UPDATE,
        domain: variable_1.DOMAIN_NCC_CONSTANT.DOMAIN
    });
}
run();
