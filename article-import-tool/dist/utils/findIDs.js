"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAddressIdByName = findAddressIdByName;
const axios_1 = __importDefault(require("axios"));
const retryRequest_1 = __importDefault(require("../core/retryRequest"));
const addressIdCache = new Map();
function escapeGraphqlString(value) {
    return value
        .replace(/\\/g, "\\\\")
        .replace(/"/g, '\\"')
        .replace(/\n/g, "\\n");
}
async function findAddressIdByName(name, options) {
    const key = name.trim();
    if (!key)
        return null;
    if (addressIdCache.has(key)) {
        return addressIdCache.get(key) || null;
    }
    const endpoint = options.endpoint || process.env.ADDRESS_GRAPHQL_ENDPOINT;
    if (!endpoint) {
        throw new Error("Missing GraphQL endpoint. Set ADDRESS_GRAPHQL_ENDPOINT or pass options.endpoint.");
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
    `;
    try {
        const res = await (0, retryRequest_1.default)(() => axios_1.default.post(endpoint, { query }, { timeout: options.timeoutMs ?? 15000 }), options.retries ?? 2, options.retryDelayMs ?? 1500);
        const items = res.data?.data?.addresses?.items || [];
        if (!Array.isArray(items) || items.length === 0) {
            addressIdCache.set(key, null);
            return null;
        }
        const exact = items.find((i) => typeof i?.name === "string" && i.name.trim().toLowerCase() === key.toLowerCase());
        const id = (exact?.id || items[0]?.id || null);
        addressIdCache.set(key, id);
        return id;
    }
    catch (err) {
        console.error("✖ findAddressIdByName error:", name);
        addressIdCache.set(key, null);
        return null;
    }
}
