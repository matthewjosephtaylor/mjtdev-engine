import { isUndefined } from "./../isUndefined";
import { fix } from "./fix";
export const fixArray = (arr) => {
    if (isUndefined(arr)) {
        return undefined;
    }
    return fix(arr.map(fix));
};
//# sourceMappingURL=fixArray.js.map