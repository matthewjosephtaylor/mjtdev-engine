import { xOf } from "./xOf";
export function subtract0(a, b) {
    if (b === undefined) {
        return a;
    }
    if (a === undefined) {
        return b;
    }
    return xOf(a) - xOf(b);
}
//# sourceMappingURL=subtract0.js.map