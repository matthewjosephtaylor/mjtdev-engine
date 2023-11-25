import { isUndefined } from "./isUndefined";
export const isEmpty = (value) => {
    if (isUndefined(value)) {
        return true;
    }
    if (typeof value === "string") {
        return value.trim().length === 0;
    }
    return false;
};
//# sourceMappingURL=isEmpty.js.map