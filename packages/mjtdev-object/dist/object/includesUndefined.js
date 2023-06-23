import { isUndefined } from "./isUndefined";
export const includesUndefined = (...arr) => {
    if (isUndefined(arr)) {
        return true;
    }
    arr.findIndex((x) => isUndefined(x)) === -1;
};
//# sourceMappingURL=includesUndefined.js.map