import axios from "axios"
import retryRequest from "../core/retryRequest"

type FindAddressOptions = {
    endpoint?: string
    merchantId: string
    languageId: string
    limit?: number
    timeoutMs?: number
    retries?: number
    retryDelayMs?: number
}

const addressIdCache = new Map<string, string | null>()

function escapeGraphqlString(value: string) {
    return value
        .replace(/\\/g, "\\\\")
        .replace(/"/g, '\\"')
        .replace(/\n/g, "\\n")
}

export async function findAddressIdByName(
    name: string,
    options: FindAddressOptions
): Promise<string | null> {
    const key = name.trim()
    if (!key) return null

    if (addressIdCache.has(key)) {
        return addressIdCache.get(key) || null
    }

    const endpoint = options.endpoint || process.env.ADDRESS_GRAPHQL_ENDPOINT
    if (!endpoint) {
        throw new Error("Missing GraphQL endpoint. Set ADDRESS_GRAPHQL_ENDPOINT or pass options.endpoint.")
    }

    const query = `
    {
        addresses(param:{merchantId:"${options.merchantId}",limit:${options.limit ?? 10},offset:0, order:"desc", sort: "createdDate", keyword:"${escapeGraphqlString(key)}",languageId:"${options.languageId}"})
            {
                items {
                    id
                    name
                }
                totalCount
            }
    }
    `

    try {
        const res = await retryRequest(
            () => axios.post(endpoint, { query }, { timeout: options.timeoutMs ?? 15000 }),
            options.retries ?? 2,
            options.retryDelayMs ?? 1500
        )
        const items = res.data?.data?.addresses?.items || []

        if (!Array.isArray(items) || items.length === 0) {
            addressIdCache.set(key, null)
            return null
        }

        const exact = items.find(
            (i: any) => typeof i?.name === "string" && i.name.trim().toLowerCase() === key.toLowerCase()
        )
        const id = (exact?.id || items[0]?.id || null) as string | null

        addressIdCache.set(key, id)
        return id
    } catch (err) {
        console.error("✖ findAddressIdByName error:", name)
        addressIdCache.set(key, null)
        return null
    }
}
