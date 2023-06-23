"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.immediateToArrayBuffer = void 0;
const arrayToFloat64Array_1 = require("./arrayToFloat64Array");
const immediateToArrayBuffer = (bytes) => {
    if (bytes instanceof ArrayBuffer) {
        return bytes;
    }
    // TODO rollup fucks TextEncoder
    // if (typeof bytes === "string") {
    //     const encoder = new TextEncoder();
    //     return encoder.encode(bytes);
    // }
    if (ArrayBuffer.isView(bytes)) {
        return bytes.buffer;
    }
    if (Array.isArray(bytes)) {
        return (0, arrayToFloat64Array_1.arrayToFloat64Array)(bytes);
    }
    return new ArrayBuffer(0);
};
exports.immediateToArrayBuffer = immediateToArrayBuffer;
//# sourceMappingURL=immediateToArrayBuffer.js.map