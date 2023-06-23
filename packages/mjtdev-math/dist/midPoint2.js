import { toVec2 } from "./toVec2";
export function midPoint2(a, b) {
    const [x1, y1] = toVec2(a);
    const [x2, y2] = toVec2(b);
    const x = (x1 + x2) / 2;
    const y = (y1 + y2) / 2;
    return [x, y];
}
//# sourceMappingURL=midPoint2.js.map