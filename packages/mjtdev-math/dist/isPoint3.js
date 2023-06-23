import { isVec3 } from "./isVec3";
import { isPointObject3 } from "./isPointObject3";
export function isPoint3(maybe) {
    return isPointObject3(maybe) || isVec3(maybe);
}
//# sourceMappingURL=isPoint3.js.map