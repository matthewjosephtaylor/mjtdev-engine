import { xOf } from "./xOf";
import { yOf } from "./yOf";
import { zOf } from "./zOf";
export function multiply3(a, b) {
    if (b === undefined) {
        return a;
    }
    if (a === undefined) {
        return b;
    }
    return [xOf(a) * xOf(b), yOf(a) * yOf(b), zOf(a) * zOf(b)];
}
//# sourceMappingURL=multiply3.js.map