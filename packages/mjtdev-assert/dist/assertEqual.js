import { assert } from "./assert";
import { assertEqualElements } from "./assertEqualElements";
export const assertEqual = (a, b, message = () => {
    console.error(a, b);
    return `Assertion failed: ${JSON.stringify(a)} is not equal to ${JSON.stringify(b)}`;
}) => {
    if (Array.isArray(a) && Array.isArray(b)) {
        return assertEqualElements(a, b, message);
    }
    return assert(a === b, message);
};
//# sourceMappingURL=assertEqual.js.map