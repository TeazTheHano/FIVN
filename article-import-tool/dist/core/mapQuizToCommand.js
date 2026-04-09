"use strict";
// core/mapQuizToCommand.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapQuizToCommand = void 0;
const uuid_1 = require("uuid");
const formatDate_1 = __importDefault(require("../utils/formatDate"));
const mapQuizToCommand = (quiz, questionId, displayOrder, userId) => {
    const now = (0, formatDate_1.default)(new Date());
    const answers = quiz.answers.map((a, index) => ({
        Id: (0, uuid_1.v4)(),
        Name: a.text || "", // tránh null
        IsCorrect: a.isCorrect,
        DisplayOrder: index,
        Images: []
    }));
    return {
        Id: (0, uuid_1.v4)(),
        QuestionId: questionId,
        Name: quiz.question || "",
        SubDescription: "",
        Description: "",
        DisplayOrder: displayOrder,
        Type: quiz.type === 'true_false' ? 1 : 2,
        Point: 0,
        Images: [],
        Answers: answers,
        // 🔥 critical fields (tránh null ref backend)
        Status: 1,
        IsActive: true,
        ModifiedDate: now,
        ModifiedBy: userId,
        CreatedDate: now,
        CreatedBy: userId
    };
};
exports.mapQuizToCommand = mapQuizToCommand;
