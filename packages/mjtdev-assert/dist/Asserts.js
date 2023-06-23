"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Asserts = void 0;
const assert_1 = require("./assert");
const assertEqual_1 = require("./assertEqual");
const assertEqualElements_1 = require("./assertEqualElements");
const assertNotEqual_1 = require("./assertNotEqual");
const assertType_1 = require("./assertType");
const assertUnreachable_1 = require("./assertUnreachable");
const assertValue_1 = require("./assertValue");
exports.Asserts = {
    assert: assert_1.assert,
    assertUnreachable: assertUnreachable_1.assertUnreachable,
    assertValue: assertValue_1.assertValue,
    assertEqual: assertEqual_1.assertEqual,
    assertNotEqual: assertNotEqual_1.assertNotEqual,
    assertEqualElements: assertEqualElements_1.assertEqualElements,
    assertType: assertType_1.assertType,
};
//# sourceMappingURL=Asserts.js.map