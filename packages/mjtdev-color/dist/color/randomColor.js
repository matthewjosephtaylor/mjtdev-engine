"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomColor = void 0;
const color_1 = __importDefault(require("color"));
function randomColor(random = Math.random) {
    return color_1.default.rgb([
        255 * random(),
        255 * random(),
        255 * random(),
    ]).toString();
}
exports.randomColor = randomColor;
//# sourceMappingURL=randomColor.js.map