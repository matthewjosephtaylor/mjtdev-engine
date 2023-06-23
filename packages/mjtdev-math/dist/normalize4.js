import { divide4 } from "./divide4";
import { length4 } from "./length4";
export function normalize4(p) {
    const length = length4(p);
    if (length === 1) {
        return p;
    }
    return divide4(p, [length, length, length, length]);
}
//# sourceMappingURL=normalize4.js.map