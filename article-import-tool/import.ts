import runImport from "./core/runImport"
import data from "./data"
import buildArticle from "./domain/buildArticle"
import buildNCCUser from "./domain/buildNCC_upload_overide"
import buildUser from "./domain/buildUser"
import { DOMAIN_ARTICLE_CONSTANT, DOMAIN_NCC_CONSTANT, DOMAIN_USER_CONSTANT } from "./variable"


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

    await runImport({
        buildPayload: buildNCCUser,
        data: data,
        option: {
            useTypeOrCategoryOrNone: "category",
            useDummyEmailWithRandomAndPrefix: "NCC2",
            updateData: true,
            updateDateAddress: true,
            addressGraphqlEndpoint: "https://apicms.izzi.asia/graphql/"
        },
        commandName: DOMAIN_NCC_CONSTANT.COMMAND_NAME_UPDATE,
        domain: DOMAIN_NCC_CONSTANT.DOMAIN
    })
}

run()