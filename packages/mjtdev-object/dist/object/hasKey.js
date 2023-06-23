import { isDefined } from "./isDefined";
import { toMany } from "./toMany";
export const hasKey = (obj, key) => {
    const keys = toMany(key);
    return keys.filter((key) => isDefined(obj[key])).length === keys.length;
};
//# sourceMappingURL=hasKey.js.map