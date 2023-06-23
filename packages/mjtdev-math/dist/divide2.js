import { xOf } from "./xOf";
import { yOf } from "./yOf";
import { contains } from "./contains";
export function divide2(a, b) {
    if (b === undefined || contains(b, 0)) {
        return undefined;
    }
    if (a === undefined) {
        return undefined;
    }
    return [xOf(a) / xOf(b), yOf(a) / yOf(b)];
}
//# sourceMappingURL=divide2.js.map