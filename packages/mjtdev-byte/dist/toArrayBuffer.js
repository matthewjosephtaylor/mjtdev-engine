"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toArrayBuffer = void 0;
const arrayToFloat64Array_1 = require("./arrayToFloat64Array");
const toArrayBuffer = async (bytes) => {
    if (bytes instanceof ArrayBuffer) {
        return bytes;
    }
    if (bytes instanceof Blob) {
        return bytes.arrayBuffer();
    }
    if (typeof bytes === "string") {
        const encoder = new TextEncoder();
        return encoder.encode(bytes);
    }
    if (ArrayBuffer.isView(bytes)) {
        return bytes.buffer;
    }
    if (Array.isArray(bytes)) {
        return (0, arrayToFloat64Array_1.arrayToFloat64Array)(bytes);
    }
    return new ArrayBuffer(0);
};
exports.toArrayBuffer = toArrayBuffer;
//# sourceMappingURL=toArrayBuffer.js.map