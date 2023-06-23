import { divide3 } from "./divide3";
import { length3 } from "./length3";
export function normalize3(p) {
    const length = length3(p);
    if (length === 1) {
        return p;
    }
    return divide3(p, [length, length, length]);
}
//# sourceMappingURL=normalize3.js.map