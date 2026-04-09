"use strict";
// previewQuiz.ts
Object.defineProperty(exports, "__esModule", { value: true });
const parseExcel_1 = require("./core/parseExcel");
const exportJson_1 = require("./core/exportJson");
const file = './data/quiz.xlsx';
const result = (0, parseExcel_1.parseExcelToQuiz)(file);
console.log('================ VALID ================');
console.dir(result.valid, { depth: null });
console.log('================ ERRORS ================');
console.dir(result.errors, { depth: null });
// optional: export file để check bằng mắt
(0, exportJson_1.exportJson)(result.valid, 'quiz.preview.json');
