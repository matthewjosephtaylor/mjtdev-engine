import { blend0 } from "./blend0";
import { xOf } from "./xOf";
/**
 * blend two point1s via alpha
 * 0 = 100% a
 * 1 = 100% b
 * @param a
 * @param b
 * @param alpha
 */
export function blend1(a, b, alpha) {
    return [xOf(blend0(a, b, alpha))];
}
//# sourceMappingURL=blend1.js.map