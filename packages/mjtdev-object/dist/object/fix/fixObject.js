import { isUndefined } from "./../isUndefined";
import { fix } from "./fix";
export const fixObject = (obj) => {
    if (isUndefined(obj)) {
        return undefined;
    }
    const fixedEntries = Object.entries(obj).map(([k, v]) => [k, fix(v)]);
    return fix(Object.fromEntries(fixedEntries));
};
//# sourceMappingURL=fixObject.js.map