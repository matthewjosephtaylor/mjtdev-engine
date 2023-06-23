"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFixed = void 0;
// | number | string | boolean;
const isFixed = (maybe) => {
    const straw = maybe;
    return typeof straw === "object" && Object.isFrozen(straw);
};
exports.isFixed = isFixed;
//# sourceMappingURL=Fixed.js.map