import { isValue } from "./isValue";
import { xOf } from "./xOf";
/**
 * Promotes number to array
 */
export function toVec0(point) {
    if (!isValue(point)) {
        return undefined;
    }
    return [xOf(point)];
}
//# sourceMappingURL=toVec0.js.map