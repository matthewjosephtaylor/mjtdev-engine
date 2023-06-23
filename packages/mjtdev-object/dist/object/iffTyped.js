"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.iffTyped = void 0;
const iff_1 = require("./iff");
const iffTyped = (typeGuard, value, mapper) => {
    if (typeGuard(value)) {
        return (0, iff_1.iff)(value, mapper);
    }
    return undefined;
};
exports.iffTyped = iffTyped;
//# sourceMappingURL=iffTyped.js.map