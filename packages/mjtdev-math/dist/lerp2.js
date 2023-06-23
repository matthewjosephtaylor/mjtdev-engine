import { xOf } from "./xOf";
import { yOf } from "./yOf";
import { lerp } from "./lerp";
export const lerp2 = (a, b, alpha) => {
    return [lerp(xOf(a), xOf(b), alpha), lerp(yOf(a), yOf(b), alpha)];
};
//# sourceMappingURL=lerp2.js.map