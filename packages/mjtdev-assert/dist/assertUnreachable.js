"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertUnreachable = void 0;
const toMessage_1 = require("./toMessage");
function assertUnreachable(value, message = "Assertion failed: Reached what should be an unreachable section of code") {
    throw new Error((0, toMessage_1.toMessage)(message));
}
exports.assertUnreachable = assertUnreachable;
//# sourceMappingURL=assertUnreachable.js.map