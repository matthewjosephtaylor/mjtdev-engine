"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replace = void 0;
const isUndefined_1 = require("./isUndefined");
const replace = (typeGuard, arr, mapper) => {
    if ((0, isUndefined_1.isUndefined)(arr)) {
        return undefined;
    }
    return arr.map((a) => {
        if (typeGuard(a)) {
            return mapper(a);
        }
        return a;
    });
};
exports.replace = replace;
//# sourceMappingURL=replace.js.map