"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const slugify = (str) => str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
exports.default = slugify;
