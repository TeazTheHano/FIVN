"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = buildUser;
const crypto_1 = require("crypto");
function buildUser(item) {
    return {
        Id: (0, crypto_1.randomUUID)(),
        Name: item.Name,
        Email: item.Email,
        Password: item.Password,
        AllType: item.AllType ?? 0,
        Images: []
    };
}
