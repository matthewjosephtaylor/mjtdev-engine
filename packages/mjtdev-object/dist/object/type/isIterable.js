"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isIterable = void 0;
function isIterable(maybe) {
    const straw = maybe;
    return (typeof straw === "object" && typeof straw[Symbol.iterator] === "function");
}
exports.isIterable = isIterable;
//# sourceMappingURL=isIterable.js.map