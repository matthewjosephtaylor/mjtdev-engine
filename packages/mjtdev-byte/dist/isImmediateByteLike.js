"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isImmediateByteLike = void 0;
const isImmediateByteLike = (maybe) => {
    const straw = maybe;
    if (straw instanceof ArrayBuffer) {
        return true;
    }
    if (typeof straw === "string") {
        return true;
    }
    if (ArrayBuffer.isView(straw)) {
        return true;
    }
    if (Array.isArray(straw)) {
        return true;
    }
    return false;
};
exports.isImmediateByteLike = isImmediateByteLike;
//# sourceMappingURL=isImmediateByteLike.js.map