"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertNotEqual = void 0;
const assert_1 = require("./assert");
const assertNotEqual = (a, b, message = () => {
    console.error(a, b);
    return `Assertion failed: ${JSON.stringify(a)} is equal to ${JSON.stringify(b)}`;
}) => {
    // if (Array.isArray(a) && Array.isArray(b)) {
    //   return assertEqualElements(a, b, message);
    // }
    return (0, assert_1.assert)(a !== b, message);
};
exports.assertNotEqual = assertNotEqual;
//# sourceMappingURL=assertNotEqual.js.map