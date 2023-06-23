"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.test = void 0;
const assert_1 = require("@mjtdev/assert");
const addressStringOf_1 = require("./addressStringOf");
const ALGORITHM_BYTE_LENGTHS_1 = require("./ALGORITHM_BYTE_LENGTHS");
const ALL_ALGORITHMS_1 = require("./ALL_ALGORITHMS");
const hashOf_1 = require("./hashOf");
const idStringToIdBytes_1 = require("./idStringToIdBytes");
const toArrayBuffer_1 = require("./toArrayBuffer");
const toText_1 = require("./toText");
// eslint-disable-next-line @typescript-eslint/ban-types
const TESTS = [];
TESTS.push(async () => {
    const data = "test";
    const arr = await (0, toArrayBuffer_1.toArrayBuffer)(data);
    const actual = await (0, toText_1.toText)(arr);
    return assert_1.Asserts.assertEqual(data, actual);
});
TESTS.push(async () => {
    return ALL_ALGORITHMS_1.ALL_ALGORITHMS.map(async (algorithm) => {
        const actual = await (0, hashOf_1.hashOf)({ bytes: "test", algorithm });
        return assert_1.Asserts.assertEqual(actual.byteLength, ALGORITHM_BYTE_LENGTHS_1.ALGORITHM_BYTE_LENGTHS[algorithm]);
    });
});
TESTS.push(async () => {
    {
        const actual = await (0, addressStringOf_1.addressStringOf)({
            bytes: "test",
            algorithm: "SHA-256",
        });
        assert_1.Asserts.assertEqual(actual, "SHA-256:n4bQgYhMfWWaL+qgxVrQFaO/TxsrC4Is0V1sFbDwCgg=");
    }
    {
        const actual = await (0, addressStringOf_1.addressStringOf)({
            bytes: "test",
            algorithm: "SHA-512",
        });
        assert_1.Asserts.assertEqual(actual, "SHA-512:7iaw3Ur350mqGo7jwQrpkj9hiYB3Lkc/iBml1JQODbJ6wYX4oOHV+E+IvIh/1nsUNzLDBMxfqa2Ob1f1ACio/w==");
    }
});
TESTS.push(async () => {
    return ALL_ALGORITHMS_1.ALL_ALGORITHMS.map(async (algorithm) => {
        const data = "test";
        const id = await (0, addressStringOf_1.addressStringOf)({ bytes: data, algorithm });
        const idBytesExpected = new Uint8Array(await (0, hashOf_1.hashOf)({ bytes: data, algorithm }));
        const idBytes = (0, idStringToIdBytes_1.idStringToIdBytes)({ id });
        return assert_1.Asserts.assertEqualElements(idBytes, idBytesExpected);
    });
});
const test = async () => {
    const results = await Promise.all(TESTS.map(async (test) => {
        try {
            await test();
            return true;
        }
        catch (error) {
            console.error(error);
            return false;
        }
    }));
    if (results.find((v) => v === false)) {
        throw new Error("TESTS FAILED");
    }
    console.log("TESTS PASS");
    return true;
};
exports.test = test;
//# sourceMappingURL=TEST.js.map