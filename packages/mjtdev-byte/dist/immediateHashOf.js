"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.immediateHashOf = void 0;
const immediateToArrayBuffer_1 = require("./immediateToArrayBuffer");
const immediateHashOf = async (bytes, algorithm) => {
    const buffer = (0, immediateToArrayBuffer_1.immediateToArrayBuffer)(bytes);
    return crypto.subtle.digest(algorithm, buffer);
};
exports.immediateHashOf = immediateHashOf;
//# sourceMappingURL=immediateHashOf.js.map