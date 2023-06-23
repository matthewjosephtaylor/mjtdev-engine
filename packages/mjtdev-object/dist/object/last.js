import { isUndefined } from "./isUndefined";
export const last = (obj) => {
    if (isUndefined(obj)) {
        return undefined;
    }
    return obj[obj.length - 1];
};
//# sourceMappingURL=last.js.map