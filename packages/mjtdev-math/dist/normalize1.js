import { divide1 } from "./divide1";
import { length1 } from "./length1";
export function normalize1(p) {
    const length = length1(p);
    if (length === 1) {
        return p;
    }
    return divide1(p, [length]);
}
//# sourceMappingURL=normalize1.js.map