"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashOf = void 0;
const toArrayBuffer_1 = require("./toArrayBuffer");
const hashOf = async ({ bytes, algorithm = "SHA-512", }) => {
    const buffer = await (0, toArrayBuffer_1.toArrayBuffer)(bytes);
    return crypto.subtle.digest(algorithm, buffer);
};
exports.hashOf = hashOf;
//# sourceMappingURL=hashOf.js.map