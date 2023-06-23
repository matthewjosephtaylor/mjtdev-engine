import { toVec4 } from "./toVec4";
export function lengthSquared4(p) {
    const [x, y, z, w] = toVec4(p);
    return x * x + y * y + z * z + w * w;
}
//# sourceMappingURL=lengthSquared4.js.map