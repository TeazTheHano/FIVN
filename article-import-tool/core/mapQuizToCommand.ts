// core/mapQuizToCommand.ts

import { generateGuid as uuidv4 } from '../utils/uuid'
import formatDate from '../utils/formatDate'
import { QuizInput } from '../domain/validateQuiz'

import { DOMAIN_QUIZ_CONSTANT } from '../variable'

export const mapQuizToCommand = (
    quiz: QuizInput,
    questionId: string,
    displayOrder: number,
    userId: string
) => {
    const now = formatDate(new Date())

    const answers = quiz.answers.map((a, index) => ({
        id: uuidv4(),
        name: a.text || "", // tránh null
        isCorrect: a.isCorrect,
        displayOrder: index,
        images: []
    }))

    // Sử dụng map từ central config, fallback về số 2 (Select 1) nếu chưa define
    const mappedType = DOMAIN_QUIZ_CONSTANT.TYPE_MAP[quiz.type] || 2

    return {
        Id: questionId,
        QuestionId: uuidv4(),
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
    }
}