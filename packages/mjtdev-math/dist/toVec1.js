import { isValue } from "./isValue";
import { xOf } from "./xOf";
export function toVec1(point) {
    if (!isValue(point)) {
        return undefined;
    }
    return [xOf(point)];
}
//# sourceMappingURL=toVec1.js.map