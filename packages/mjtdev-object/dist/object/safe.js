"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.safe = void 0;
const isDefined_1 = require("./isDefined");
const valueOf_1 = require("./valueOf");
const safe = (producer, options = {}) => {
    const { quiet = false, def = undefined, onError } = options;
    try {
        return producer();
    }
    catch (error) {
        if (!quiet) {
            console.error(error);
            if ((0, isDefined_1.isDefined)(onError)) {
                console.log((0, valueOf_1.valueOf)(onError));
            }
        }
        return def;
    }
};
exports.safe = safe;
//# sourceMappingURL=safe.js.map