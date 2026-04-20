"use strict";
// importQuiz.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sendCommand_1 = __importDefault(require("./core/sendCommand"));
const quizData_1 = require("./data/quizData");
const mapQuizToCommand_1 = require("./core/mapQuizToCommand");
const uuid_1 = require("./utils/uuid");
const formatDate_1 = __importDefault(require("./utils/formatDate"));
const USER_ID = 'd0ef30a3-0595-66f8-3b91-6afa1a2f53e6';
async function run() {
    for (const [setName, quizzes] of Object.entries(quizData_1.quizData)) {
        const questionId = (0, uuid_1.generateGuid)();
        console.log(`\n📦 SET: ${setName}`);
        console.log(`🆔 QuestionId: ${questionId}`);
        const now = (0, formatDate_1.default)(new Date());
        const createSetContent = {
            Id: questionId,
            Name: setName,
            SubDescription: "",
            Categories: [],
            Description: "",
            Duration: 60,
            Images: [],
            Option: { ShowScore: true, RandomDisplayOrderQuestion: false },
            MerchantId: "3dde928c-8bff-43ac-9b78-d4fb58fb5be7", // Giữ nguyên từ log của user
            CreatedDate: now,
            CreatedBy: USER_ID
        };
        const createSetPayload = {
            CommandName: 'CreateQuiz',
            Domain: 'Quiz',
            Content: JSON.stringify(createSetContent),
            ModifiedBy: USER_ID,
            ModifiedDate: now,
            TimeOutSecond: 10
        };
        console.log(`🚀 Creating Quiz Container: ${setName}`);
        try {
            const setRes = await (0, sendCommand_1.default)(createSetPayload);
            if (!setRes?.Success) {
                console.error('❌ Failed creating Set:', setRes?.Message);
                continue; // Bỏ qua không thêm câu hỏi nếu cụm cha chưa tạo được thành công
            }
            else {
                console.log('✅ Success creating Set');
            }
        }
        catch (err) {
            console.error('💥 Error creating Set:', err);
            continue;
        }
        for (let i = 0; i < quizzes.length; i++) {
            const quiz = quizzes[i];
            const content = (0, mapQuizToCommand_1.mapQuizToCommand)(quiz, questionId, i, USER_ID);
            const payload = {
                CommandName: 'CreateQuestionQuiz',
                Domain: 'Quiz',
                Content: JSON.stringify(content),
                ModifiedBy: USER_ID,
                ModifiedDate: content.ModifiedDate,
                TimeOutSecond: 10
            };
            console.log(`🚀 Sending Create: ${quiz.question}`);
            try {
                const res = await (0, sendCommand_1.default)(payload);
                if (!res?.Success) {
                    console.error('❌ Failed Create:', res?.Message);
                }
                else {
                    console.log('✅ Success Create');
                    // WORKAROUND: Trừ hao trường hợp CMS bỏ qua Type=2 ở lệnh Create
                    // Gửi tiếp 1 lệnh Update để ép type thành Select One (Type: 2)
                    const updateContent = { ...content };
                    // API C# update nhận 'subDescription' chữ thường
                    // @ts-ignore
                    updateContent.subDescription = updateContent.SubDescription;
                    // @ts-ignore
                    delete updateContent.SubDescription;
                    const updatePayload = {
                        CommandName: 'UpdateQuestionQuiz',
                        Domain: 'Quiz',
                        Content: JSON.stringify(updateContent),
                        ModifiedBy: USER_ID,
                        ModifiedDate: content.ModifiedDate,
                        TimeOutSecond: 10
                    };
                    console.log(`🚀 Sending Update (Type Fix): ${quiz.question}`);
                    const updateRes = await (0, sendCommand_1.default)(updatePayload);
                    if (!updateRes?.Success) {
                        console.error('❌ Failed Update Type Fix:', updateRes?.Message);
                    }
                    else {
                        console.log('✅ Success Update Type Fix');
                    }
                }
            }
            catch (err) {
                console.error('💥 Error:', err);
            }
        }
    }
}
run();
