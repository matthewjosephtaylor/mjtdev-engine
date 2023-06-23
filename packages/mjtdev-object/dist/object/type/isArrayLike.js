"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isArrayLike = void 0;
const isArrayLike = (maybe) => {
    const straw = maybe;
    return typeof straw === "object" && typeof straw.length === "number";
};
exports.isArrayLike = isArrayLike;
//# sourceMappingURL=isArrayLike.js.map