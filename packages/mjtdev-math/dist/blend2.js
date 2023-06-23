import { blend } from "./blend";
import { toVec2 } from "./toVec2";
/**
 * blend two point2s via alpha
 * 0 = 100% a
 * 1 = 100% b
 * @param a
 * @param b
 * @param alpha
 */
export function blend2(a, b, alpha) {
    const [ax, ay] = toVec2(a);
    const [bx, by] = toVec2(b);
    const [alphaX, alphaY] = toVec2(alpha);
    return [blend(ax, bx, alphaX), blend(ay, by, alphaY)];
}
//# sourceMappingURL=blend2.js.map