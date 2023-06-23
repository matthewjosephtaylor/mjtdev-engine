"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lighten = void 0;
const builder_1 = require("./builder");
function lighten(color, ratio) {
    return (0, builder_1.builder)({ color }).lighten(ratio).toString();
}
exports.lighten = lighten;
//# sourceMappingURL=lighten.js.map