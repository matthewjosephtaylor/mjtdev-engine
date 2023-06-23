import { xOf } from "./xOf";
export function subtract1(a, b) {
    if (b === undefined) {
        return a;
    }
    if (a === undefined) {
        return b;
    }
    return [xOf(a) - xOf(b)];
}
//# sourceMappingURL=subtract1.js.map