"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.idStringToIdBytes = void 0;
const assert_1 = require("@mjtdev/assert");
const idStringToIdBytes = ({ id }) => {
    const splitValue = id.split(":");
    assert_1.Asserts.assert(splitValue.length === 2);
    // TODO only SHA FOR NOW
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [algorithm, base64] = splitValue;
    const binaryString = atob(base64);
    const result = new Uint8Array(binaryString.length);
    binaryString
        .split("")
        .map((s) => s.charCodeAt(0))
        .forEach((b, i) => {
        result[i] = b;
    });
    return result;
};
exports.idStringToIdBytes = idStringToIdBytes;
//# sourceMappingURL=idStringToIdBytes.js.map