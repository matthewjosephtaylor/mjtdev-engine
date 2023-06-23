import { isObject } from "./isObject";
export function isPointObject1(maybe) {
    return isObject(maybe) && typeof maybe["x"] === "number";
}
//# sourceMappingURL=isPointObject1.js.map