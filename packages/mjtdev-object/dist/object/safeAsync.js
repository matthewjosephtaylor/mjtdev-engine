import { isDefined } from "./isDefined";
import { safe } from "./safe";
import { valueOf } from "./valueOf";
export const safeAsync = async (producer, options = {}) => {
    const { quiet = false, def = undefined, onError } = options;
    return safe(async () => {
        const result = producer();
        if (result instanceof Promise) {
            return await result.catch((reason) => {
                if (!quiet) {
                    console.error(reason);
                    if (isDefined(onError)) {
                        console.log(valueOf(onError));
                    }
                }
                return def;
            });
        }
        return result;
    });
};
//# sourceMappingURL=safeAsync.js.map