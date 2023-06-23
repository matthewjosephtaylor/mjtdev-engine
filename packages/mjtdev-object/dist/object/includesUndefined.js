"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.includesUndefined = void 0;
const isUndefined_1 = require("./isUndefined");
const includesUndefined = (...arr) => {
    if ((0, isUndefined_1.isUndefined)(arr)) {
        return true;
    }
    arr.findIndex((x) => (0, isUndefined_1.isUndefined)(x)) === -1;
};
exports.includesUndefined = includesUndefined;
//# sourceMappingURL=includesUndefined.js.map