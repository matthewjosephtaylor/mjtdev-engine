"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toText = void 0;
const toArrayBuffer_1 = require("./toArrayBuffer");
const toText = async (bytes) => {
    if (typeof bytes === "string") {
        return bytes;
    }
    const arr = await (0, toArrayBuffer_1.toArrayBuffer)(bytes);
    const decoder = new TextDecoder();
    return decoder.decode(arr);
};
exports.toText = toText;
//# sourceMappingURL=toText.js.map