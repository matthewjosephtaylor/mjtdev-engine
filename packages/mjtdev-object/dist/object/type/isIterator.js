"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isIterator = void 0;
const isIterator = (maybe) => {
    const straw = maybe;
    return typeof straw === "object" && typeof straw["next"] === "function";
};
exports.isIterator = isIterator;
//# sourceMappingURL=isIterator.js.map