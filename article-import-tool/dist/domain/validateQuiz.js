"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateQuiz = void 0;
const validateQuiz = (quiz) => {
    if (!quiz.question) {
        throw new Error('Question is required');
    }
    if (!quiz.answers || quiz.answers.length === 0) {
        throw new Error('Answers are required');
    }
    if (quiz.type === 'true_false') {
        if (quiz.answers.length !== 2) {
            throw new Error('True/False must have exactly 2 answers');
        }
    }
    if (quiz.type === 'single') {
        const correctCount = quiz.answers.filter(a => a.isCorrect).length;
        if (correctCount !== 1) {
            throw new Error('Single choice must have exactly 1 correct answer');
        }
    }
};
exports.validateQuiz = validateQuiz;
