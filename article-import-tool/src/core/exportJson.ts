// core/exportJson.ts

import * as fs from 'fs'

export const exportJson = (data: any, fileName: string) => {
    fs.writeFileSync(fileName, JSON.stringify(data, null, 2), 'utf-8')
    console.log(`✅ Exported: ${fileName}`)
}