import { Ray } from "babylonjs";
import { v3 } from "../bab/v3";
export const createRay = (origin, direction, length) => {
    return new Ray(v3(origin), v3(direction), length);
};
//# sourceMappingURL=createRay.js.map