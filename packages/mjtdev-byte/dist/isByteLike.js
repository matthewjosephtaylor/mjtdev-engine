"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isByteLike = void 0;
const isImmediateByteLike_1 = require("./isImmediateByteLike");
const isByteLike = (maybe) => {
    if (maybe instanceof Blob) {
        return true;
    }
    return (0, isImmediateByteLike_1.isImmediateByteLike)(maybe);
};
exports.isByteLike = isByteLike;
//# sourceMappingURL=isByteLike.js.map