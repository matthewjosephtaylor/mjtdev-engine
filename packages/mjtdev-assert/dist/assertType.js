"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertType = void 0;
const toMessage_1 = require("./toMessage");
function assertType(value, typeGuard, message = "Assertion failed: Required value is not of correct type") {
    if (!typeGuard(value)) {
        throw new Error((0, toMessage_1.toMessage)(message));
    }
    return value;
}
exports.assertType = assertType;
//# sourceMappingURL=assertType.js.map