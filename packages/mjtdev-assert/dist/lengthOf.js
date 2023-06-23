export const lengthOf = (arr) => {
    if (Array.isArray(arr)) {
        return arr.length;
    }
    if (arr instanceof ArrayBuffer || ArrayBuffer.isView(arr)) {
        return arr.byteLength;
    }
};
//# sourceMappingURL=lengthOf.js.map