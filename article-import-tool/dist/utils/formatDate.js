"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formatDate = (date) => {
    const pad = (n) => n.toString().padStart(2, "0");
    return `${pad(date.getDate())}-${pad(date.getMonth() + 1)}-${date.getFullYear()} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
};
exports.default = formatDate;
