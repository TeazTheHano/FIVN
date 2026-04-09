"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateGuid = void 0;
// utils/uuid.ts
const crypto_1 = require("crypto");
const generateGuid = () => (0, crypto_1.randomUUID)();
exports.generateGuid = generateGuid;
