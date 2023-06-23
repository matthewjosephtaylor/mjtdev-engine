"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lengthOf = void 0;
const lengthOf = (arr) => {
    if (Array.isArray(arr)) {
        return arr.length;
    }
    if (arr instanceof ArrayBuffer || ArrayBuffer.isView(arr)) {
        return arr.byteLength;
    }
};
exports.lengthOf = lengthOf;
//# sourceMappingURL=lengthOf.js.map