import axios from "axios"
import delay from "../utils/delay"

async function retryRequest<T>(
    fn: () => Promise<T>,
    retries = 3,
    delayMs = 5000
): Promise<T> {
    let lastError: unknown

    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            return await fn()
        } catch (error: unknown) {
            lastError = error

            if (axios.isAxiosError(error)) {
                const status = error.response?.status

                if (status && status >= 400 && status < 500) {
                    throw error
                }
            }

            if (attempt < retries) {
                console.log(`⚠ Retry ${attempt}/${retries} sau ${delayMs}ms...`)
                await delay(delayMs)
            }
        }
    }

    throw lastError
}

export default retryRequest