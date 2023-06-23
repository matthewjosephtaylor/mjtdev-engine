"use strict";
// import Vibrant from "node-vibrant";
Object.defineProperty(exports, "__esModule", { value: true });
exports.palletteFrom = void 0;
const palletteFrom = async (src, options) => {
    const { colorCount = 64, quality = 5 } = options;
    // const vibrant = Vibrant.from(src).maxColorCount(colorCount).quality(quality);
    // return vibrant.getPalette();
    throw new Error("node-vibrant does dirty worker shenanigans on load, find simpler alternative");
};
exports.palletteFrom = palletteFrom;
//# sourceMappingURL=palletteFrom.js.map