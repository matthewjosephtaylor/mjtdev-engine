import { divide2 } from "./divide2";
import { length2 } from "./length2";
export function normalize2(p) {
    const length = length2(p);
    if (length === 1) {
        return p;
    }
    return divide2(p, [length, length]);
}
//# sourceMappingURL=normalize2.js.map