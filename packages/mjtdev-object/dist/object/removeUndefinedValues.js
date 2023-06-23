import { isDefined } from "./isDefined";
export const removeUndefinedValues = (obj) => {
    const cleaned = Object.entries(obj).filter(([k, v]) => isDefined(v));
    return Object.fromEntries(cleaned);
};
//# sourceMappingURL=removeUndefinedValues.js.map