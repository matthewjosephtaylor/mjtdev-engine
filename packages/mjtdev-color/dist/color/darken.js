"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.darken = void 0;
const builder_1 = require("./builder");
function darken(color, ratio) {
    return (0, builder_1.builder)({ color }).darken(ratio).toString();
}
exports.darken = darken;
//# sourceMappingURL=darken.js.map