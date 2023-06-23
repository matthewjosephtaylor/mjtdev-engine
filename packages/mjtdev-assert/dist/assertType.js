import { toMessage } from "./toMessage";
export function assertType(value, typeGuard, message = "Assertion failed: Required value is not of correct type") {
    if (!typeGuard(value)) {
        throw new Error(toMessage(message));
    }
    return value;
}
//# sourceMappingURL=assertType.js.map