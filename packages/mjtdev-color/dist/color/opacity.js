"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.opacity = void 0;
const builder_1 = require("./builder");
function opacity(color, ratio) {
    return (0, builder_1.builder)({ color }).alpha(ratio).toString();
}
exports.opacity = opacity;
//# sourceMappingURL=opacity.js.map