"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lengthOf = void 0;
const lengthOf = (bytes) => {
    if (typeof bytes === "string") {
        return bytes.length;
    }
    if (bytes instanceof Blob) {
        return bytes.size;
    }
    if (bytes instanceof ArrayBuffer) {
        return bytes.byteLength;
    }
    if (ArrayBuffer.isView(bytes)) {
        return bytes.byteLength;
    }
};
exports.lengthOf = lengthOf;
//# sourceMappingURL=lengthOf.js.map