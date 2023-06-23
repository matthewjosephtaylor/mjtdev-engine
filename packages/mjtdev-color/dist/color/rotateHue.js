"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rotateHue = void 0;
const builder_1 = require("./builder");
function rotateHue(color, ratio) {
    return (0, builder_1.builder)({ color })
        .rotate(ratio * 360)
        .toString();
}
exports.rotateHue = rotateHue;
//# sourceMappingURL=rotateHue.js.map