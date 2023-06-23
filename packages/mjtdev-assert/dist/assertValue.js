"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertValue = void 0;
const assert_1 = require("./assert");
const isValue_1 = require("./isValue");
function assertValue(maybe, message = "Assertion failed: Required value not defined") {
    (0, assert_1.assert)((0, isValue_1.isValue)(maybe), message);
    return maybe;
}
exports.assertValue = assertValue;
//# sourceMappingURL=assertValue.js.map