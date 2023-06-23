import { isVec2 } from "./isVec2";
import { isPointObject2 } from "./isPointObject2";
export function isPoint2(maybe) {
    return isPointObject2(maybe) || isVec2(maybe);
}
//# sourceMappingURL=isPoint2.js.map