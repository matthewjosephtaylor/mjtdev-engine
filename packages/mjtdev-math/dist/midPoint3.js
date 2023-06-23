import { toVec3 } from "./toVec3";
export function midPoint3(a, b) {
    const [x1, y1, z1] = toVec3(a);
    const [x2, y2, z2] = toVec3(b);
    const x = (x1 + x2) / 2;
    const y = (y1 + y2) / 2;
    const z = (z1 + z2) / 2;
    return [x, y, z];
}
//# sourceMappingURL=midPoint3.js.map