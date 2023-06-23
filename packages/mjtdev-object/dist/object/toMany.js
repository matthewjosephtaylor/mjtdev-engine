import { isUndefined } from "./isUndefined";
import { isIterable } from "./type/isIterable";
export const toMany = (obj) => {
    if (isUndefined(obj)) {
        return [];
    }
    if (isIterable(obj)) {
        return Array.from(obj);
    }
    return Array.isArray(obj) ? obj : [obj];
};
//# sourceMappingURL=toMany.js.map