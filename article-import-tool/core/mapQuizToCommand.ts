// core/mapQuizToCommand.ts

import { v4 as uuidv4 } from 'uuid'
import formatDate from '../utils/formatDate'
import { QuizInput } from '../domain/validateQuiz'

export const mapQuizToCommand = (
    quiz: QuizInput,
    questionId: string,
    displayOrder: number,
    userId: string
) => {
    const now = formatDate(new Date())

    const answers = quiz.answers.map((a, index) => ({
        Id: uuidv4(),
        Name: a.text || "", // tránh null
        IsCorrect: a.isCorrect,
        DisplayOrder: index,
        Images: []
    }))

    return {
        Id: uuidv4(),
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
    }
}