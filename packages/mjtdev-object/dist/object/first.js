import { isUndefined } from "./isUndefined";
import { isIterator } from "./type/isIterator";
export const first = (obj, typeGuard = (v) => true) => {
    if (isUndefined(obj)) {
        return undefined;
    }
    if (Array.isArray(obj)) {
        return obj.find(typeGuard);
    }
    if (isIterator(obj) && typeGuard(obj)) {
        return obj.next().value;
    }
    return obj;
};
//# sourceMappingURL=first.js.map