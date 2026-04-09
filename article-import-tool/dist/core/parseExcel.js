"use strict";
// core/parseExcel.ts
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseExcelToQuiz = void 0;
const XLSX = __importStar(require("xlsx"));
const detectType = (answers) => {
    if (answers.length !== 2)
        return 'single';
    const normalized = answers.map(a => a.toLowerCase());
    const isTF = normalized.some(a => /đúng|true|yes/.test(a)) &&
        normalized.some(a => /sai|false|no/.test(a));
    return isTF ? 'true_false' : 'single';
};
const parseExcelToQuiz = (filePath) => {
    const workbook = XLSX.readFile(filePath);
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const rows = XLSX.utils.sheet_to_json(sheet);
    const valid = {};
    const errors = [];
    rows.forEach((row, index) => {
        const excelRow = index + 2;
        try {
            // 1. Validate question
            if (!row['question'] || !row['question'].trim()) {
                throw new Error('Question is empty');
            }
            // 2. Collect answers
            const answersRaw = [
                row['ans 1'],
                row['ans 2'],
                row['ans 3'],
                row['ans 4']
            ].filter(Boolean).map((a) => a.toString().trim());
            if (answersRaw.length < 2) {
                throw new Error('Must have at least 2 answers');
            }
            // 3. Validate correct answer
            const correctIndex = Number(row['correct ans']) - 1;
            if (isNaN(correctIndex)) {
                throw new Error('Correct answer is not a number');
            }
            if (correctIndex < 0 || correctIndex >= answersRaw.length) {
                throw new Error('Correct answer out of range');
            }
            // 4. Build answers
            const answers = answersRaw.map((text, i) => ({
                text,
                isCorrect: i === correctIndex
            }));
            // 5. Detect type
            const type = detectType(answersRaw);
            // 6. Group by question set
            const setName = row['question set']?.trim() || 'default';
            if (!valid[setName]) {
                valid[setName] = [];
            }
            valid[setName].push({
                question: row['question'].trim(),
                type,
                answers
            });
        }
        catch (err) {
            errors.push({
                row: excelRow,
                message: err.message,
                raw: row
            });
        }
    });
    return { valid, errors };
};
exports.parseExcelToQuiz = parseExcelToQuiz;
