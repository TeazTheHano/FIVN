// importQuiz.ts

import sendCommand from './core/sendCommand'
import { quizData } from './data/quizData'
import { mapQuizToCommand } from './core/mapQuizToCommand'
import { generateGuid as uuidv4 } from './utils/uuid'

import formatDate from './utils/formatDate'

const USER_ID = 'd0ef30a3-0595-66f8-3b91-6afa1a2f53e6'

async function run() {
    for (const [setName, quizzes] of Object.entries(quizData)) {
        const questionId = uuidv4()

        console.log(`\n📦 SET: ${setName}`)
        console.log(`🆔 QuestionId: ${questionId}`)

        const now = formatDate(new Date())
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
        }

        const createSetPayload = {
            CommandName: 'CreateQuiz',
            Domain: 'Quiz',
            Content: JSON.stringify(createSetContent),
            ModifiedBy: USER_ID,
            ModifiedDate: now,
            TimeOutSecond: 10
        }

        console.log(`🚀 Creating Quiz Container: ${setName}`)
        try {
            const setRes = await sendCommand(createSetPayload)
            if (!setRes?.Success) {
                console.error('❌ Failed creating Set:', setRes?.Message)
                continue // Bỏ qua không thêm câu hỏi nếu cụm cha chưa tạo được thành công
            } else {
                console.log('✅ Success creating Set')
            }
        } catch (err) {
            console.error('💥 Error creating Set:', err)
            continue
        }

        for (let i = 0; i < quizzes.length; i++) {
            const quiz = quizzes[i]

            const content = mapQuizToCommand(
                quiz,
                questionId,
                i,
                USER_ID
            )

            const payload = {
                CommandName: 'CreateQuestionQuiz',
                Domain: 'Quiz',
                Content: JSON.stringify(content),
                ModifiedBy: USER_ID,
                ModifiedDate: content.ModifiedDate,
                TimeOutSecond: 10
            }

            console.log(`🚀 Sending Create: ${quiz.question}`)

            try {
                const res = await sendCommand(payload)

                if (!res?.Success) {
                    console.error('❌ Failed Create:', res?.Message)
                } else {
                    console.log('✅ Success Create')
                    
                    // WORKAROUND: Trừ hao trường hợp CMS bỏ qua Type=2 ở lệnh Create
                    // Gửi tiếp 1 lệnh Update để ép type thành Select One (Type: 2)
                    
                    const updateContent = { ...content }
                    // API C# update nhận 'subDescription' chữ thường
                    // @ts-ignore
                    updateContent.subDescription = updateContent.SubDescription
                    // @ts-ignore
                    delete updateContent.SubDescription
                    
                    const updatePayload = {
                        CommandName: 'UpdateQuestionQuiz',
                        Domain: 'Quiz',
                        Content: JSON.stringify(updateContent),
                        ModifiedBy: USER_ID,
                        ModifiedDate: content.ModifiedDate,
                        TimeOutSecond: 10
                    }
                    
                    console.log(`🚀 Sending Update (Type Fix): ${quiz.question}`)
                    const updateRes = await sendCommand(updatePayload)
                    if (!updateRes?.Success) {
                        console.error('❌ Failed Update Type Fix:', updateRes?.Message)
                    } else {
                        console.log('✅ Success Update Type Fix')
                    }
                }
            } catch (err) {
                console.error('💥 Error:', err)
            }
        }
    }
}

run()