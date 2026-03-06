import axios from "axios"
import retryRequest from "./retryRequest"
import { COMMAND_LINK } from "../variable"


export interface CommandPayload {
    CommandName: string
    Domain: string
    Content: string
    TimeOutSecond?: number
}

async function sendCommand(payload: CommandPayload) {
    try {
        const res = await retryRequest(() =>
            axios.post(COMMAND_LINK, payload, { timeout: 35000 })
        )
        console.log("✔ Tạo bài thành công:", res.data)
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