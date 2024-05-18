import { isErrorType } from "./type/isErrorType";
export const tryValue = (value, message) => {
    if (isErrorType(value)) {
        throw new Error(message, { cause: value });
    }
    return value;
};
//# sourceMappingURL=tryValue.js.map