import { CommandPayload } from "./sendCommand"

function buildCommand(
    commandName: string,
    domain: string,
    content: unknown
): CommandPayload {

    return {
        CommandName: commandName,
        Domain: domain,
        Content: JSON.stringify(content),
        TimeOutSecond: 30
    }
}

export default buildCommand