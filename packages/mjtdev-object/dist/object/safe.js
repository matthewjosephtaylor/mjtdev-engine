import { isDefined } from "./isDefined";
import { valueOf } from "./valueOf";
export const safe = (producer, options = {}) => {
    const { quiet = false, def = undefined, onError } = options;
    try {
        return producer();
    }
    catch (error) {
        if (!quiet) {
            console.error(error);
            if (isDefined(onError)) {
                console.log(valueOf(onError));
            }
        }
        return def;
    }
};
//# sourceMappingURL=safe.js.map