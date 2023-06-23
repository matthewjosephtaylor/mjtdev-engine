"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayBufferToUtf8 = void 0;
const arrayBufferToUtf8 = (input) => new TextDecoder().decode(new Uint8Array(input));
exports.arrayBufferToUtf8 = arrayBufferToUtf8;
//# sourceMappingURL=arrayBufferToUtf8.js.map