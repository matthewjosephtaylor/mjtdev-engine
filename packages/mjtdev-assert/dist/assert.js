import { toMessage } from "./toMessage";
export function assert(value, message = "Assertion failed") {
    if (!value) {
        throw new Error(toMessage(message));
    }
}
//# sourceMappingURL=assert.js.map