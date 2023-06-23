"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toBlob = void 0;
const arrayToFloat64Array_1 = require("./arrayToFloat64Array");
const toBlob = (bytes, mediaType = "application/octet-stream") => {
    if (bytes instanceof Blob) {
        return bytes;
    }
    if (bytes instanceof ArrayBuffer) {
        return new Blob([bytes], { type: mediaType });
    }
    if (typeof bytes === "string") {
        return new Blob([bytes], { type: mediaType });
    }
    if (ArrayBuffer.isView(bytes)) {
        return new Blob([bytes], { type: mediaType });
    }
    if (Array.isArray(bytes)) {
        return new Blob([(0, arrayToFloat64Array_1.arrayToFloat64Array)(bytes)], { type: mediaType });
    }
    return new Blob([]);
};
exports.toBlob = toBlob;
//# sourceMappingURL=toBlob.js.map