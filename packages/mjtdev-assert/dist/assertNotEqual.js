import { assert } from "./assert";
export const assertNotEqual = (a, b, message = () => {
    console.error(a, b);
    return `Assertion failed: ${JSON.stringify(a)} is equal to ${JSON.stringify(b)}`;
}) => {
    // if (Array.isArray(a) && Array.isArray(b)) {
    //   return assertEqualElements(a, b, message);
    // }
    return assert(a !== b, message);
};
//# sourceMappingURL=assertNotEqual.js.map