"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const runImport_1 = __importDefault(require("./core/runImport"));
const data_1 = __importDefault(require("./data"));
const buildUser_1 = __importDefault(require("./domain/buildUser"));
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
    await (0, runImport_1.default)({
        buildPayload: buildUser_1.default,
        data: data_1.default,
        option: {
            typeDefault: variable_1.DOMAIN_USER_CONSTANT.Type_Author
        },
        commandName: variable_1.DOMAIN_USER_CONSTANT.COMMAND_NAME_CREATE,
        domain: variable_1.DOMAIN_USER_CONSTANT.DOMAIN
    });
}
run();
