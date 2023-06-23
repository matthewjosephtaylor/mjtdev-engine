"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encodeAsString = void 0;
const toArrayBuffer_1 = require("./toArrayBuffer");
// @see https://stackoverflow.com/questions/40031688/javascript-arraybuffer-to-hex
const encodeAsString = async (bytes, radix = 16) => {
    const arr = await (0, toArrayBuffer_1.toArrayBuffer)(bytes);
    return [...new Uint8Array(arr)]
        .map((x) => x.toString(radix).padStart(2, "0"))
        .join("");
};
exports.encodeAsString = encodeAsString;
//# sourceMappingURL=encodeAsString.js.map