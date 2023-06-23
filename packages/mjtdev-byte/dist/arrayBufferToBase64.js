"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayBufferToBase64 = void 0;
const arrayBufferToBase64 = (input) => {
    if (typeof window === "undefined") {
        return Buffer.from(input).toString("base64");
    }
    return btoa(new Uint8Array(input).reduce((data, byte) => data + String.fromCharCode(byte), ""));
};
exports.arrayBufferToBase64 = arrayBufferToBase64;
//# sourceMappingURL=arrayBufferToBase64.js.map