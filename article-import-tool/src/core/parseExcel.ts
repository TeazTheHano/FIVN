// core/parseExcel.ts

import * as XLSX from 'xlsx'
import { QuizInput } from '../domain/validateQuiz'

export interface ParseError {
    row: number
    message: string
    raw: any
}

export interface ParseResult {
    valid: Record<string, QuizInput[]>
    errors: ParseError[]
}

interface RawRow {
    'question set': string
    'no': number
    'question': string
    'ans 1': string
    'ans 2': string
    'ans 3'?: string
    'ans 4'?: string
    'correct ans': number
}

const detectType = (answers: string[]): 'single' | 'true_false' => {
    if (answers.length !== 2) return 'single'

    const normalized = answers.map(a => a.toLowerCase())

    const isTF =
        normalized.some(a => /đúng|true|yes/.test(a)) &&
        normalized.some(a => /sai|false|no/.test(a))

    return isTF ? 'true_false' : 'single'
}

export const parseExcelToQuiz = (filePath: string): ParseResult => {
    const workbook = XLSX.readFile(filePath)
    const sheet = workbook.Sheets[workbook.SheetNames[0]]

    const rows: RawRow[] = XLSX.utils.sheet_to_json(sheet)

    const valid: Record<string, QuizInput[]> = {}
    const errors: ParseError[] = []

    rows.forEach((row, index) => {
        const excelRow = index + 2

        try {
            // 1. Validate question
            if (!row['question'] || !row['question'].trim()) {
                throw new Error('Question is empty')
            }

            // 2. Collect answers
            const answersRaw = [
                row['ans 1'],
                row['ans 2'],
                row['ans 3'],
                row['ans 4']
            ].filter(Boolean).map((a: any) => a.toString().trim())

            if (answersRaw.length < 2) {
                throw new Error('Must have at least 2 answers')
            }

            // 3. Validate correct answer
            const correctIndex = Number(row['correct ans']) - 1

            if (isNaN(correctIndex)) {
                throw new Error('Correct answer is not a number')
            }

            if (correctIndex < 0 || correctIndex >= answersRaw.length) {
                throw new Error('Correct answer out of range')
            }

            // 4. Build answers
            const answers = answersRaw.map((text, i) => ({
                text,
                isCorrect: i === correctIndex
            }))

            // 5. Detect type
            const type = detectType(answersRaw)

            // 6. Group by question set
            const setName = row['question set']?.trim() || 'default'

            if (!valid[setName]) {
                valid[setName] = []
            }

            valid[setName].push({
                question: row['question'].trim(),
                type,
                answers
            })

        } catch (err: any) {
            errors.push({
                row: excelRow,
                message: err.message,
                raw: row
            })
        }
    })

    return { valid, errors }
}