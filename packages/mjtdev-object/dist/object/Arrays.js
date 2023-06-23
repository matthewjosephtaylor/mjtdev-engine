"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Arrays = exports.from = void 0;
const from = (value = 0) => {
    if (typeof value === "number") {
        return Array.from({ length: value });
    }
    return Array.from(value);
};
exports.from = from;
exports.Arrays = {
    from: exports.from,
};
//# sourceMappingURL=Arrays.js.map