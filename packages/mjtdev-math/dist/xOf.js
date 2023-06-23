import { isPointObject1 } from "./isPointObject1";
export function xOf(point) {
    if (typeof point === "number") {
        return point;
    }
    return isPointObject1(point) ? point.x : point[0];
}
//# sourceMappingURL=xOf.js.map