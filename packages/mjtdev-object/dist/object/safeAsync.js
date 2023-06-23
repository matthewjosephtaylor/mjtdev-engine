"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.safeAsync = void 0;
const isDefined_1 = require("./isDefined");
const safe_1 = require("./safe");
const valueOf_1 = require("./valueOf");
const safeAsync = async (producer, options = {}) => {
    const { quiet = false, def = undefined, onError } = options;
    return (0, safe_1.safe)(async () => {
        const result = producer();
        if (result instanceof Promise) {
            return await result.catch((reason) => {
                if (!quiet) {
                    console.error(reason);
                    if ((0, isDefined_1.isDefined)(onError)) {
                        console.log((0, valueOf_1.valueOf)(onError));
                    }
                }
                return def;
            });
        }
        return result;
    });
};
exports.safeAsync = safeAsync;
//# sourceMappingURL=safeAsync.js.map