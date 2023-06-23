import { xOf } from "./xOf";
import { yOf } from "./yOf";
import { zOf } from "./zOf";
import { lerp } from "./lerp";
export const lerp3 = (a, b, alpha) => {
    return [
        lerp(xOf(a), xOf(b), alpha),
        lerp(yOf(a), yOf(b), alpha),
        lerp(zOf(a), zOf(b), alpha),
    ];
};
//# sourceMappingURL=lerp3.js.map