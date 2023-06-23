"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNotValue = void 0;
const isValue_1 = require("./isValue");
function isNotValue(maybe) {
    return !(0, isValue_1.isValue)(maybe);
}
exports.isNotValue = isNotValue;
//# sourceMappingURL=isNotValue.js.map