"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toMessage = void 0;
function toMessage(message) {
    if (typeof message === "string") {
        return message;
    }
    const messageMaybe = message();
    if (typeof messageMaybe === "string") {
        return messageMaybe;
    }
    console.error("ASSERTION FAIL VALUE", messageMaybe);
    return "Assertion Failed";
}
exports.toMessage = toMessage;
//# sourceMappingURL=toMessage.js.map