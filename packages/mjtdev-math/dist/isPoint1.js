import { isVec1 } from "./isVec1";
import { isPointObject1 } from "./isPointObject1";
export function isPoint1(maybe) {
    return isPointObject1(maybe) || isVec1(maybe);
}
//# sourceMappingURL=isPoint1.js.map