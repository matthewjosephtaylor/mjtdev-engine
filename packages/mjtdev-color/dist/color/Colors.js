"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Colors = void 0;
const builder_1 = require("./builder");
const darken_1 = require("./darken");
const desaturate_1 = require("./desaturate");
const from_1 = require("./from");
const lighten_1 = require("./lighten");
const opacity_1 = require("./opacity");
const operateOn_1 = require("./operateOn");
const palletteFrom_1 = require("./palletteFrom");
const randomColor_1 = require("./randomColor");
const rotateHue_1 = require("./rotateHue");
const saturate_1 = require("./saturate");
const SomeColorToCssFilters_1 = require("./SomeColorToCssFilters");
const textColor_1 = require("./textColor");
const toCss_1 = require("./toCss");
const toRgbInteger_1 = require("./toRgbInteger");
exports.Colors = {
    from: from_1.from,
    builder: builder_1.builder,
    toCss: toCss_1.toCss,
    toRgbInteger: toRgbInteger_1.toRgbInteger,
    darken: darken_1.darken,
    desaturate: desaturate_1.desaturate,
    lighten: lighten_1.lighten,
    randomColor: randomColor_1.randomColor,
    saturate: saturate_1.saturate,
    textColor: textColor_1.textColor,
    toCssFilters: SomeColorToCssFilters_1.toCssFilters,
    rotateHue: rotateHue_1.rotateHue,
    operateOn: operateOn_1.operateOn,
    opacity: opacity_1.opacity,
    palletteFrom: palletteFrom_1.palletteFrom,
};
//# sourceMappingURL=Colors.js.map