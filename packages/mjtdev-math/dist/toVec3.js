import { isValue } from "./isValue";
import { zOf } from "./zOf";
import { yOf } from "./yOf";
import { xOf } from "./xOf";
export function toVec3(point) {
    if (!isValue(point)) {
        return undefined;
    }
    return [xOf(point), yOf(point), zOf(point)];
}
//# sourceMappingURL=toVec3.js.map