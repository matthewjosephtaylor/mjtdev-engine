import { isPoint3 } from "./isPoint3";
import { isPointObject3 } from "./isPointObject3";
export function zOf(point) {
    if (isPoint3(point)) {
        return isPointObject3(point) ? point.z : point[2];
    }
    return undefined;
}
//# sourceMappingURL=zOf.js.map