"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.noiseRange = void 0;
const _1 = require(".");
const noiseRange = (seed = 0) => {
    const random = seed === undefined ? (x = 0.5) => x : (0, _1.noiseStream)(seed);
    return (max = 1, min = 0) => {
        return min + random() * (max - min);
    };
};
exports.noiseRange = noiseRange;
//# sourceMappingURL=noiseRange.js.map