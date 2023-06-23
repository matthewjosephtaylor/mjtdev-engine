"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saturate = void 0;
const builder_1 = require("./builder");
function saturate(color, ratio) {
    return (0, builder_1.builder)({ color }).saturate(ratio).toString();
}
exports.saturate = saturate;
//# sourceMappingURL=saturate.js.map