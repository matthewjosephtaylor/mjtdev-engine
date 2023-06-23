import { xOf } from "./xOf";
import { yOf } from "./yOf";
import { zOf } from "./zOf";
import { contains } from "./contains";
export function divide3(a, b) {
    if (b === undefined || contains(b, 0)) {
        return undefined;
    }
    if (a === undefined) {
        return undefined;
    }
    return [xOf(a) / xOf(b), yOf(a) / yOf(b), zOf(a) / zOf(b)];
}
//# sourceMappingURL=divide3.js.map