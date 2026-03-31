"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const retryRequest_1 = __importDefault(require("./retryRequest"));
const variable_1 = require("../variable");
async function sendCommand(payload) {
    try {
        console.log(payload);
        const curlCmd = `curl -X POST '${variable_1.COMMAND_LINK}' -H 'Content-Type: application/json' -d '${JSON.stringify(payload)}'`;
        console.log(curlCmd);
        const res = await (0, retryRequest_1.default)(() => axios_1.default.post(variable_1.COMMAND_LINK, payload, { timeout: 35000 }));
        console.log("✔ Đã push:", res.data);
        return res.data;
    }
    catch (error) {
        if (axios_1.default.isAxiosError(error)) {
            console.error("✖ Lỗi:", error.response?.data);
            throw error.response?.data;
        }
        throw error;
    }
}
exports.default = sendCommand;
