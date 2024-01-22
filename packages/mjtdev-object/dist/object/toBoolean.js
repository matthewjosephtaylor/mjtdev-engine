import { isUndefined } from "./isUndefined";
export const toBoolean = (value) => {
    if (isUndefined(value)) {
        return undefined;
    }
    return Boolean(value);
};
//# sourceMappingURL=toBoolean.js.map