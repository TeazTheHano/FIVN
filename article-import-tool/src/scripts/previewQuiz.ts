// previewQuiz.ts

import { parseExcelToQuiz } from '../core/parseExcel'
import { exportJson } from '../core/exportJson'

const file = '../data/quiz.xlsx'

const result = parseExcelToQuiz(file)

console.log('================ VALID ================')
console.dir(result.valid, { depth: null })

console.log('================ ERRORS ================')
console.dir(result.errors, { depth: null })

// optional: export file để check bằng mắt
exportJson(result.valid, 'quiz.preview.json')