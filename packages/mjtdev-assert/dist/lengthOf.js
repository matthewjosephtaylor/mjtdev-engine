export const lengthOf = (arr) => {
    if (Array.isArray(arr)) {
        return arr.length;
    }
    if (arr instanceof ArrayBuffer || ArrayBuffer.isView(arr)) {
        return arr.byteLength;
    }
    if (typeof arr === "object" && "length" in arr) {
        return arr.length;
    }
    return 0;
};
//# sourceMappingURL=lengthOf.js.map