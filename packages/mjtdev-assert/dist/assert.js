"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assert = void 0;
const toMessage_1 = require("./toMessage");
function assert(value, message = "Assertion failed") {
    if (!value) {
        throw new Error((0, toMessage_1.toMessage)(message));
    }
}
exports.assert = assert;
//# sourceMappingURL=assert.js.map