import { arrayToFloat64Array } from "./arrayToFloat64Array";
export const toArrayBuffer = async (bytes) => {
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
        return arrayToFloat64Array(bytes);
    }
    return new ArrayBuffer(0);
};
//# sourceMappingURL=toArrayBuffer.js.map