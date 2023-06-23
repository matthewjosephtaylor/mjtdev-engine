import { toVec3 } from "./toVec3";
export function lengthSquared3(p) {
    const [x, y, z] = toVec3(p);
    return x * x + y * y + z * z;
}
//# sourceMappingURL=lengthSquared3.js.map