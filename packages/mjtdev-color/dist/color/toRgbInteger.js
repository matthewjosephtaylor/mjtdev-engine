"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toRgbInteger = void 0;
const builder_1 = require("./builder");
function toRgbInteger(color) {
    return (0, builder_1.builder)({ color }).rgbNumber();
}
exports.toRgbInteger = toRgbInteger;
//# sourceMappingURL=toRgbInteger.js.map