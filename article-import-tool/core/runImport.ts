import delay from "../utils/delay"
import buildCommand from "./buildCommand"
import sendCommand from "./sendCommand"

export default async function runImport<T>({
    buildPayload,
    data,
    option,
    commandName,
    domain
}: {
    buildPayload: (item: T, option?: any) => any
    data: T[]
    option?: any,
    commandName: string
    domain: string
}) {

    for (const [index, item] of data.entries()) {

        console.log(`\n[${index + 1}/${data.length}]`)

        const entity = await buildPayload(item, option)

        const payload = buildCommand(
            commandName,
            domain,
            entity
        )

        try {

            const res = await sendCommand(payload)

            console.log("✔ Success", res)

        } catch (err) {

            console.error("✖ Error", err)

        }

        await delay(3000)
    }

}