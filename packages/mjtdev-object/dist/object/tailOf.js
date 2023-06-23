import { isUndefined } from "./isUndefined";
export const tailOf = (obj) => {
    if (isUndefined(obj)) {
        return undefined;
    }
    return obj.slice(1);
};
//# sourceMappingURL=tailOf.js.map