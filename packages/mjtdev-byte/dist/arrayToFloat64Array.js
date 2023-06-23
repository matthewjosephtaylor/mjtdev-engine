"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayToFloat64Array = void 0;
const arrayToFloat64Array = (arr) => {
    const numbers = arr.flatMap((v) => {
        if (typeof v === "number") {
            return [v];
        }
        return JSON.stringify(v)
            .split("")
            .map((s) => s.codePointAt(0));
    });
    return new Float64Array(numbers.length).map((_, i) => numbers[i]);
};
exports.arrayToFloat64Array = arrayToFloat64Array;
//# sourceMappingURL=arrayToFloat64Array.js.map