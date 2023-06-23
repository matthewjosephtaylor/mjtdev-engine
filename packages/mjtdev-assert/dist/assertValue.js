import { assert } from "./assert";
import { isValue } from "./isValue";
export function assertValue(maybe, message = "Assertion failed: Required value not defined") {
    assert(isValue(maybe), message);
    return maybe;
}
//# sourceMappingURL=assertValue.js.map