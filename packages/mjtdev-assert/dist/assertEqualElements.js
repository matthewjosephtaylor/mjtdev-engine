"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertEqualElements = void 0;
const assertEqual_1 = require("./assertEqual");
const lengthOf_1 = require("./lengthOf");
const toStableValue_1 = require("./toStableValue");
const assertEqualElements = (a, b, message = () => {
    console.error(a, b);
    return `Assertion failed: ${JSON.stringify(a)} is not equal to ${JSON.stringify(b)}`;
}) => {
    const [aLength, bLength] = [(0, lengthOf_1.lengthOf)(a), (0, lengthOf_1.lengthOf)(b)];
    (0, assertEqual_1.assertEqual)(aLength, bLength, message ||
        `Assertion failed: array length ${aLength} not equal to ${bLength}`);
    for (let i = 0; i < aLength; i++) {
        const aElement = a[i];
        const bElement = b[i];
        if (Array.isArray(aElement) && Array.isArray(bElement)) {
            (0, exports.assertEqualElements)(aElement, bElement, message);
        }
        else {
            (0, assertEqual_1.assertEqual)((0, toStableValue_1.toStableValue)(aElement), (0, toStableValue_1.toStableValue)(bElement), message ||
                `Assertion failed: at index: a[${i}]=>${JSON.stringify(aElement)} not equal to b[${i}]=>${JSON.stringify(bElement)}`);
        }
    }
};
exports.assertEqualElements = assertEqualElements;
//# sourceMappingURL=assertEqualElements.js.map