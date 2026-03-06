"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const runImport_1 = __importDefault(require("./core/runImport"));
const data_1 = __importDefault(require("./data"));
const buildArticle_1 = __importDefault(require("./domain/buildArticle"));
const variable_1 = require("./variable");
async function run() {
    await (0, runImport_1.default)({
        buildPayload: buildArticle_1.default,
        data: data_1.default,
        option: {
            friendlyUrlPrefix: variable_1.DOMAIN_ARTICLE_CONSTANT.FRIENDLY_URL_mentor,
            cateIdForAll: variable_1.DOMAIN_ARTICLE_CONSTANT.MENTOR_CATE_ID
        },
        commandName: variable_1.DOMAIN_ARTICLE_CONSTANT.COMMAND_NAME_CREATE,
        domain: variable_1.DOMAIN_ARTICLE_CONSTANT.DOMAIN
    });
}
run();
