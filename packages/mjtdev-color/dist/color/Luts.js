"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Luts = exports.isLut = void 0;
const builder_1 = require("./builder");
const clamp_1 = require("./clamp");
const textColor_1 = require("./textColor");
function isLut(maybe) {
    return (typeof maybe === "object" &&
        typeof maybe["color"] === "function" &&
        typeof maybe["text"] === "function");
}
exports.isLut = isLut;
function expandColors(colors, level = 0) {
    if (level <= 0) {
        return colors;
    }
    const expanded = colors.flatMap((c, idx, arr) => {
        if (idx === arr.length - 1) {
            return [c];
        }
        const next = arr[idx + 1];
        return [c, c.mix(next)];
    });
    return expandColors(expanded, level - 1);
}
function create(colors, levels = 8) {
    if (isLut(colors)) {
        return colors;
    }
    const expandedColors = expandColors(colors.map((color) => (0, builder_1.builder)({ color })), levels);
    // .map((c) => c.hex());
    const lut = {
        s12: (numerator) => {
            return lut.color(numerator / 12);
        },
        s12t: (numerator) => {
            return lut.text(numerator / 12);
        },
        color: (alpha) => {
            alpha = (0, clamp_1.clamp)(alpha, 0, 1);
            const idx = (0, clamp_1.clamp)(Math.floor(alpha * expandedColors.length), 0, expandedColors.length - 1);
            return expandedColors[idx].toString();
        },
        text: (alpha) => {
            const color = lut.color(alpha);
            return (0, textColor_1.textColor)([color]);
        },
    };
    return lut;
}
exports.Luts = {
    create,
    expandColors,
};
//# sourceMappingURL=Luts.js.map