import { isValue } from "./isValue";
import { yOf } from "./yOf";
import { xOf } from "./xOf";
export function toVec2(point) {
    if (!isValue(point)) {
        return undefined;
    }
    return [xOf(point), yOf(point)];
}
//# sourceMappingURL=toVec2.js.map