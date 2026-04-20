import axios from "axios"
import retryRequest from "./retryRequest"
import { COMMAND_LINK } from "../config"


export interface CommandPayload {
    CommandName: string
    Domain: string
    Content: string
    TimeOutSecond?: number
}


async function sendCommand(payload: CommandPayload) {
    try {

        console.log(payload);
        
        const curlCmd = `curl -X POST '${COMMAND_LINK}' -H 'Content-Type: application/json' -d '${JSON.stringify(payload)}'`
        console.log(curlCmd)

        const res = await retryRequest(() =>
            axios.post(COMMAND_LINK, payload, { timeout: 35000 })
        )


        console.log("✔ Đã push:", res.data)
        return res.data
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            console.error("✖ Lỗi:", error.response?.data)
            throw error.response?.data
        }
        throw error
    }
}

export default sendCommand