export function toMessage(message) {
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
//# sourceMappingURL=toMessage.js.map