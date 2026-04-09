// importQuiz.ts

import sendCommand from './core/sendCommand'
import { quizData } from './data/quizData'
import { mapQuizToCommand } from './core/mapQuizToCommand'
import { v4 as uuidv4 } from 'uuid'

const USER_ID = 'd0ef30a3-0595-66f8-3b91-6afa1a2f53e6'

async function run() {
    for (const [setName, quizzes] of Object.entries(quizData)) {
        const questionId = uuidv4()

        console.log(`\n📦 SET: ${setName}`)
        console.log(`🆔 QuestionId: ${questionId}`)

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
                TimeOutSecond: 10
            }

            console.log(`🚀 Sending: ${quiz.question}`)

            try {
                const res = await sendCommand(payload)

                if (!res?.Success) {
                    console.error('❌ Failed:', res?.Message)
                } else {
                    console.log('✅ Success')
                }
            } catch (err) {
                console.error('💥 Error:', err)
            }
        }
    }
}

run()