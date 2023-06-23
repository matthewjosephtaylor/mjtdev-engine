import { xOf } from "./xOf";
import { contains } from "./contains";
export function divide0(a, b) {
    if (b === undefined || contains(b, 0)) {
        return undefined;
    }
    if (a === undefined) {
        return undefined;
    }
    return xOf(a) / xOf(b);
}
//# sourceMappingURL=divide0.js.map