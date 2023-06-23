import { xOf } from "./xOf";
import { yOf } from "./yOf";
export function multiply2(a, b) {
    if (b === undefined) {
        return a;
    }
    if (a === undefined) {
        return b;
    }
    return [xOf(a) * xOf(b), yOf(a) * yOf(b)];
}
//# sourceMappingURL=multiply2.js.map