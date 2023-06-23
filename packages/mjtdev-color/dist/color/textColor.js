"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._subtleTextColorContrast = exports.textColor = void 0;
const builder_1 = require("./builder");
const Luts_1 = require("./Luts");
function textColor(colors, threshold = 4.5) {
    const textColors = colors.map((color) => _subtleTextColorContrast({ color, threshold }));
    const sorted = textColors
        .sort((a, b) => {
        const [aColor, aContrast] = a;
        const [bColor, bContrast] = b;
        if (aContrast === bContrast) {
            return 0;
        }
        return aContrast > bContrast ? 1 : -1;
    })
        .map((colorContrast) => colorContrast[0]);
    return sorted[0]?.toString();
}
exports.textColor = textColor;
function _subtleTextColorContrast({ color, threshold = 4.5, steps = 12, }) {
    const BW_LUT = Luts_1.Luts.create(["black", "white"]);
    const WB_LUT = Luts_1.Luts.create(["white", "black"]);
    const backgroundColor = (0, builder_1.builder)({ color });
    let bestBlack = undefined;
    let bestBlackContrast = 1000;
    for (let i = 0; i < steps; i++) {
        const stepedColor = (0, builder_1.builder)({
            color: BW_LUT.color((i / steps) * 0.5),
        });
        const contrast = stepedColor.contrast(backgroundColor);
        if (contrast > threshold && contrast < bestBlackContrast) {
            bestBlack = stepedColor;
            bestBlackContrast = contrast;
        }
    }
    let bestWhite = undefined;
    let bestWhiteContrast = 1000;
    for (let i = 0; i < steps; i++) {
        const stepedColor = (0, builder_1.builder)({
            color: WB_LUT.color((i / steps) * 0.5),
        });
        const contrast = stepedColor.contrast(backgroundColor);
        if (contrast > threshold && contrast < bestWhiteContrast) {
            bestWhite = stepedColor;
            bestWhiteContrast = contrast;
        }
    }
    if (bestWhiteContrast < bestBlackContrast) {
        return [bestWhite, bestWhiteContrast];
    }
    return [bestBlack, bestBlackContrast];
}
exports._subtleTextColorContrast = _subtleTextColorContrast;
//# sourceMappingURL=textColor.js.map