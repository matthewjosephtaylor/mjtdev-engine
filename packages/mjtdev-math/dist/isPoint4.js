import { isVec4 } from "./isVec4";
import { isPointObject4 } from "./isPointObject4";
export function isPoint4(maybe) {
    return isPointObject4(maybe) || isVec4(maybe);
}
//# sourceMappingURL=isPoint4.js.map