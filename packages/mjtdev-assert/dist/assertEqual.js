"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertEqual = void 0;
const assert_1 = require("./assert");
const assertEqualElements_1 = require("./assertEqualElements");
const assertEqual = (a, b, message = () => {
    console.error(a, b);
    return `Assertion failed: ${JSON.stringify(a)} is not equal to ${JSON.stringify(b)}`;
}) => {
    if (Array.isArray(a) && Array.isArray(b)) {
        return (0, assertEqualElements_1.assertEqualElements)(a, b, message);
    }
    return (0, assert_1.assert)(a === b, message);
};
exports.assertEqual = assertEqual;
//# sourceMappingURL=assertEqual.js.map