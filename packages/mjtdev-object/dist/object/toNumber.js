import { isUndefined } from "./isUndefined";
export const toNumber = (value) => {
    if (isUndefined(value)) {
        return undefined;
    }
    return Number(value);
};
//# sourceMappingURL=toNumber.js.map