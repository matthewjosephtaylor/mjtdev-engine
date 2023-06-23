"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.desaturate = void 0;
const builder_1 = require("./builder");
function desaturate(color, ratio) {
    return (0, builder_1.builder)({ color }).desaturate(ratio).toString();
}
exports.desaturate = desaturate;
//# sourceMappingURL=desaturate.js.map