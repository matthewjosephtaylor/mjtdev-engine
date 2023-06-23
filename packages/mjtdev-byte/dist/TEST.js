import { Asserts } from "@mjtdev/assert";
import { addressStringOf } from "./addressStringOf";
import { ALGORITHM_BYTE_LENGTHS } from "./ALGORITHM_BYTE_LENGTHS";
import { ALL_ALGORITHMS } from "./ALL_ALGORITHMS";
import { hashOf } from "./hashOf";
import { idStringToIdBytes } from "./idStringToIdBytes";
import { toArrayBuffer } from "./toArrayBuffer";
import { toText } from "./toText";
// eslint-disable-next-line @typescript-eslint/ban-types
const TESTS = [];
TESTS.push(async () => {
    const data = "test";
    const arr = await toArrayBuffer(data);
    const actual = await toText(arr);
    return Asserts.assertEqual(data, actual);
});
TESTS.push(async () => {
    return ALL_ALGORITHMS.map(async (algorithm) => {
        const actual = await hashOf({ bytes: "test", algorithm });
        return Asserts.assertEqual(actual.byteLength, ALGORITHM_BYTE_LENGTHS[algorithm]);
    });
});
TESTS.push(async () => {
    {
        const actual = await addressStringOf({
            bytes: "test",
            algorithm: "SHA-256",
        });
        Asserts.assertEqual(actual, "SHA-256:n4bQgYhMfWWaL+qgxVrQFaO/TxsrC4Is0V1sFbDwCgg=");
    }
    {
        const actual = await addressStringOf({
            bytes: "test",
            algorithm: "SHA-512",
        });
        Asserts.assertEqual(actual, "SHA-512:7iaw3Ur350mqGo7jwQrpkj9hiYB3Lkc/iBml1JQODbJ6wYX4oOHV+E+IvIh/1nsUNzLDBMxfqa2Ob1f1ACio/w==");
    }
});
TESTS.push(async () => {
    return ALL_ALGORITHMS.map(async (algorithm) => {
        const data = "test";
        const id = await addressStringOf({ bytes: data, algorithm });
        const idBytesExpected = new Uint8Array(await hashOf({ bytes: data, algorithm }));
        const idBytes = idStringToIdBytes({ id });
        return Asserts.assertEqualElements(idBytes, idBytesExpected);
    });
});
export const test = async () => {
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
//# sourceMappingURL=TEST.js.map