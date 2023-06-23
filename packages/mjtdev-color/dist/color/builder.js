"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.builder = void 0;
const color_1 = __importDefault(require("color"));
function builder({ color, model = "hsl", }) {
    if (color === undefined) {
        return new color_1.default();
    }
    if (typeof color === "string") {
        return new color_1.default(color);
    }
    switch (model) {
        case "rgb": {
            return color_1.default.rgb(color[0], color[1], color[2]);
        }
        case "rgba": {
            return color_1.default.rgb(color[0], color[1], color[2]).alpha(color[3]);
        }
        case "hsl": {
            return color_1.default.hsl(color[0], color[1], color[2]);
        }
        case "hsla": {
            return color_1.default.hsl(color[0], color[1], color[2]).alpha(color[3]);
        }
        default: {
            throw new Error(`Unknown color Model: ${model}`);
        }
    }
}
exports.builder = builder;
//# sourceMappingURL=builder.js.map