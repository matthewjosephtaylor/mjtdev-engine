import { blend } from "./blend";
import { xOf } from "./xOf";
/**
 * blend two points via alpha
 * 0 = 100% a
 * 1 = 100% b
 * @param a
 * @param b
 * @param alpha 0..1
 */
export function blend0(a, b, alpha) {
    return blend(xOf(a), xOf(b), xOf(alpha));
}
//# sourceMappingURL=blend0.js.map