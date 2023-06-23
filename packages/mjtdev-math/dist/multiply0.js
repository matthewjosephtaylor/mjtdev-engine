import { xOf } from "./xOf";
export function multiply0(a, b) {
    if (b === undefined) {
        return a;
    }
    if (a === undefined) {
        return b;
    }
    return xOf(a) * xOf(b);
}
//# sourceMappingURL=multiply0.js.map