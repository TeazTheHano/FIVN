import runImport from "./core/runImport"
import data from "./data"
import buildArticle from "./domain/buildArticle"
import buildUser from "./domain/buildUser"
import { DOMAIN_ARTICLE_CONSTANT, DOMAIN_USER_CONSTANT } from "./variable"


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

    await runImport({
        buildPayload: buildUser,
        data: data,
        option: {
            typeDefault: DOMAIN_USER_CONSTANT.Type_Author
        },
        commandName: DOMAIN_USER_CONSTANT.COMMAND_NAME_CREATE,
        domain: DOMAIN_USER_CONSTANT.DOMAIN
    })

}

run()