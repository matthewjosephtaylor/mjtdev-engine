"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertExists = void 0;
const isNotValue_1 = require("./isNotValue");
const toMessage_1 = require("./toMessage");
function assertExists(value, message = "Assertion failed: Required value does not exist") {
    if ((0, isNotValue_1.isNotValue)(value)) {
        throw new Error((0, toMessage_1.toMessage)(message));
    }
    return value;
}
exports.assertExists = assertExists;
//# sourceMappingURL=assertExists.js.map