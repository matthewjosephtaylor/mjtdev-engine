import { divide0 } from "./divide0";
import { length0 } from "./length0";
export function normalize0(p) {
    const length = length0(p);
    if (length === 1) {
        return p;
    }
    return divide0(p, length);
}
//# sourceMappingURL=normalize0.js.map