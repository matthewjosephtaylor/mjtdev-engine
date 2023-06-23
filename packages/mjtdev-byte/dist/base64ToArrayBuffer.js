"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.base64ToArrayBuffer = void 0;
const base64ToArrayBuffer = (input) => {
    // if (typeof window === "undefined") {
    //   return Buffer.from(input, "base64");
    // }
    const binaryString = atob(input);
    const result = new Uint8Array(binaryString.length);
    binaryString
        .split("")
        .map((s) => s.charCodeAt(0))
        .forEach((b, i) => {
        result[i] = b;
    });
    return result;
};
exports.base64ToArrayBuffer = base64ToArrayBuffer;
//# sourceMappingURL=base64ToArrayBuffer.js.map