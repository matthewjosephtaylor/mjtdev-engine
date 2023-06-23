import { xOf } from "./xOf";
import { contains } from "./contains";
export function divide1(a, b) {
    if (b === undefined || contains(b, 0)) {
        return undefined;
    }
    if (a === undefined) {
        return undefined;
    }
    return [xOf(a) / xOf(b)];
}
//# sourceMappingURL=divide1.js.map