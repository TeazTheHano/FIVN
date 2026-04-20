"use strict";
// core/mapQuizToCommand.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapQuizToCommand = void 0;
const uuid_1 = require("../utils/uuid");
const formatDate_1 = __importDefault(require("../utils/formatDate"));
const variable_1 = require("../variable");
const mapQuizToCommand = (quiz, questionId, displayOrder, userId) => {
    const now = (0, formatDate_1.default)(new Date());
    const answers = quiz.answers.map((a, index) => ({
        id: (0, uuid_1.generateGuid)(),
        name: a.text || "", // tránh null
        isCorrect: a.isCorrect,
        displayOrder: index,
        images: []
    }));
    // Sử dụng map từ central config, fallback về số 2 (Select 1) nếu chưa define
    const mappedType = variable_1.DOMAIN_QUIZ_CONSTANT.TYPE_MAP[quiz.type] || 2;
    return {
        Id: questionId,
        QuestionId: (0, uuid_1.generateGuid)(),
        Name: quiz.question || "",
        SubDescription: "",
        Description: "",
        DisplayOrder: displayOrder,
        Type: mappedType,
        Point: quiz.point || 1,
        Images: [],
        Answers: answers,
        ModifiedDate: now,
        ModifiedBy: userId
    };
};
exports.mapQuizToCommand = mapQuizToCommand;
