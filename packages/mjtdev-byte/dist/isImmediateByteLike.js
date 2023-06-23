export const isImmediateByteLike = (maybe) => {
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
//# sourceMappingURL=isImmediateByteLike.js.map