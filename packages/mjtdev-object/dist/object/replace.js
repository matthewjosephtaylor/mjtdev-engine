import { isUndefined } from "./isUndefined";
export const replace = (typeGuard, arr, mapper) => {
    if (isUndefined(arr)) {
        return undefined;
    }
    return arr.map((a) => {
        if (typeGuard(a)) {
            return mapper(a);
        }
        return a;
    });
};
//# sourceMappingURL=replace.js.map