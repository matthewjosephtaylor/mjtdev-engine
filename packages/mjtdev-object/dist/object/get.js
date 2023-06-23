import { isUndefined } from "..";
export const get = (obj, key, defaultValue = undefined) => {
    const value = obj[key];
    if (isUndefined(value)) {
        return defaultValue;
    }
    return value;
};
//# sourceMappingURL=get.js.map