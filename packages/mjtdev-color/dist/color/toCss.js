"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toCss = void 0;
const builder_1 = require("./builder");
function toCss(color, model) {
    return (0, builder_1.builder)({ color, model }).hsl().string();
}
exports.toCss = toCss;
//# sourceMappingURL=toCss.js.map