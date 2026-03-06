"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function buildCommand(commandName, domain, content) {
    return {
        CommandName: commandName,
        Domain: domain,
        Content: JSON.stringify(content),
        TimeOutSecond: 30
    };
}
exports.default = buildCommand;
