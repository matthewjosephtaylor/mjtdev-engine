import { toMessage } from "./toMessage";
export function assertUnreachable(value, message = "Assertion failed: Reached what should be an unreachable section of code") {
    throw new Error(toMessage(message));
}
//# sourceMappingURL=assertUnreachable.js.map