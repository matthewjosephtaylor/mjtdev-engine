import { isUndefined } from "./../isUndefined";
export const fix = (v) => {
    if (isUndefined(v)) {
        return undefined;
    }
    return Object.freeze(v);
};
//# sourceMappingURL=fix.js.map