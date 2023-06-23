"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.immediateToBase64 = exports.eventualToBase64 = exports.toBase64 = void 0;
const immediateToArrayBuffer_1 = require("./immediateToArrayBuffer");
const isImmediateByteLike_1 = require("./isImmediateByteLike");
const toArrayBuffer_1 = require("./toArrayBuffer");
function toBase64(bytes) {
    if ((0, isImmediateByteLike_1.isImmediateByteLike)(bytes)) {
        return immediateToBase64(bytes);
    }
    return eventualToBase64(bytes);
}
exports.toBase64 = toBase64;
async function eventualToBase64(bytes) {
    const arr = await (0, toArrayBuffer_1.toArrayBuffer)(bytes);
    return btoa(String.fromCharCode(...new Uint8Array(arr)));
}
exports.eventualToBase64 = eventualToBase64;
function immediateToBase64(bytes) {
    const arr = (0, immediateToArrayBuffer_1.immediateToArrayBuffer)(bytes);
    return btoa(String.fromCharCode(...new Uint8Array(arr)));
}
exports.immediateToBase64 = immediateToBase64;
//# sourceMappingURL=toBase64.js.map