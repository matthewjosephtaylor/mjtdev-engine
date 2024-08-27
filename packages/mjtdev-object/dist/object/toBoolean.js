import { isUndefined } from "./isUndefined";
export const toBoolean = (value) => {
    if (isUndefined(value)) {
        return false;
    }
    const truthyValues = ["true", "1", "yes", "on"];
    const falsyValues = ["false", "0", "no", "off"];
    if (truthyValues.includes(value.toLowerCase()))
        return true;
    if (falsyValues.includes(value.toLowerCase()))
        return false;
    return false; // Return false by default
};
//# sourceMappingURL=toBoolean.js.map