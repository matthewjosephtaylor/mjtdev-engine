import { wOf } from "./wOf";
import { xOf } from "./xOf";
import { yOf } from "./yOf";
import { zOf } from "./zOf";
import { lerp } from "./lerp";
export const lerp4 = (a, b, alpha) => {
    return [
        lerp(xOf(a), xOf(b), alpha),
        lerp(yOf(a), yOf(b), alpha),
        lerp(zOf(a), zOf(b), alpha),
        lerp(wOf(a), wOf(b), alpha),
    ];
};
//# sourceMappingURL=lerp4.js.map