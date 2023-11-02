import { toVec2 } from "@mjtdev/math";
import { Vector } from "matter-js";
export const toMatterVector = (point) => {
    const [x, y] = toVec2(point);
    return Vector.create(x, y);
};
//# sourceMappingURL=toMatterVector.js.map