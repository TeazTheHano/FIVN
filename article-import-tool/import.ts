import runImport from "./core/runImport"
import data from "./data"
import buildArticle from "./domain/buildArticle"
import { DOMAIN_ARTICLE_CONSTANT } from "./variable"


async function run() {

    await runImport({
        buildPayload: buildArticle,
        data: data,
        option: {
            friendlyUrlPrefix: DOMAIN_ARTICLE_CONSTANT.FRIENDLY_URL_mentor,
            cateIdForAll: DOMAIN_ARTICLE_CONSTANT.MENTOR_CATE_ID
        },
        commandName: DOMAIN_ARTICLE_CONSTANT.COMMAND_NAME_CREATE,
        domain: DOMAIN_ARTICLE_CONSTANT.DOMAIN
    })

}

run()