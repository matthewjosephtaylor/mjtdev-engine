import { isUndefined } from "./isUndefined";
export const freeze = (v) => {
    if (isUndefined(v)) {
        return undefined;
    }
    return Object.freeze(v);
};
//# sourceMappingURL=freeze.js.map