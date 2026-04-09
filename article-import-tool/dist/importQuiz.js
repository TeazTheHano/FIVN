"use strict";
// importQuiz.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sendCommand_1 = __importDefault(require("./core/sendCommand"));
const quizData_1 = require("./data/quizData");
const mapQuizToCommand_1 = require("./core/mapQuizToCommand");
const uuid_1 = require("uuid");
const USER_ID = 'd0ef30a3-0595-66f8-3b91-6afa1a2f53e6';
async function run() {
    for (const [setName, quizzes] of Object.entries(quizData_1.quizData)) {
        const questionId = (0, uuid_1.v4)();
        console.log(`\n📦 SET: ${setName}`);
        console.log(`🆔 QuestionId: ${questionId}`);
        for (let i = 0; i < quizzes.length; i++) {
            const quiz = quizzes[i];
            const content = (0, mapQuizToCommand_1.mapQuizToCommand)(quiz, questionId, i, USER_ID);
            const payload = {
                CommandName: 'CreateQuestionQuiz',
                Domain: 'Quiz',
                Content: JSON.stringify(content),
                TimeOutSecond: 10
            };
            console.log(`🚀 Sending: ${quiz.question}`);
            try {
                const res = await (0, sendCommand_1.default)(payload);
                if (!res?.Success) {
                    console.error('❌ Failed:', res?.Message);
                }
                else {
                    console.log('✅ Success');
                }
            }
            catch (err) {
                console.error('💥 Error:', err);
            }
        }
    }
}
run();
