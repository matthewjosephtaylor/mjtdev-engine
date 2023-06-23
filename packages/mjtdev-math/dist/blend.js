/**
 * blend two points via alpha
 * 0 = 100% a
 * 1 = 100% b
 * @param a
 * @param b
 * @param alpha 0..1
 */
export function blend(a, b, alpha) {
    const aAmount = a * (1 - alpha);
    const bAmount = b * alpha;
    return aAmount + bAmount;
}
//# sourceMappingURL=blend.js.map