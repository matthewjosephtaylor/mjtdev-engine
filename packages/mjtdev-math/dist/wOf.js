import { isPoint4 } from "./isPoint4";
import { isPointObject4 } from "./isPointObject4";
export function wOf(point) {
    if (isPoint4(point)) {
        return isPointObject4(point) ? point.w : point[3];
    }
    return undefined;
}
//# sourceMappingURL=wOf.js.map