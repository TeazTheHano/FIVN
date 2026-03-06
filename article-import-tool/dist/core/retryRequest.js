"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const delay_1 = __importDefault(require("../utils/delay"));
async function retryRequest(fn, retries = 3, delayMs = 5000) {
    let lastError;
    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            return await fn();
        }
        catch (error) {
            lastError = error;
            if (axios_1.default.isAxiosError(error)) {
                const status = error.response?.status;
                if (status && status >= 400 && status < 500) {
                    throw error;
                }
            }
            if (attempt < retries) {
                console.log(`⚠ Retry ${attempt}/${retries} sau ${delayMs}ms...`);
                await (0, delay_1.default)(delayMs);
            }
        }
    }
    throw lastError;
}
exports.default = retryRequest;
