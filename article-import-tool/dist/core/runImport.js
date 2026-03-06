"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = runImport;
const delay_1 = __importDefault(require("../utils/delay"));
const buildCommand_1 = __importDefault(require("./buildCommand"));
const sendCommand_1 = __importDefault(require("./sendCommand"));
async function runImport({ buildPayload, data, option, commandName, domain }) {
    for (const [index, item] of data.entries()) {
        console.log(`\n[${index + 1}/${data.length}]`);
        const entity = buildPayload(item, option);
        const payload = (0, buildCommand_1.default)(commandName, domain, entity);
        try {
            const res = await (0, sendCommand_1.default)(payload);
            console.log("✔ Success", res);
        }
        catch (err) {
            console.error("✖ Error", err);
        }
        await (0, delay_1.default)(3000);
    }
}
