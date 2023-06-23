import { xOf } from "./xOf";
export function add1(a, b) {
    if (b === undefined) {
        return a;
    }
    if (a === undefined) {
        return b;
    }
    return [xOf(a) + xOf(b)];
}
//# sourceMappingURL=add1.js.map