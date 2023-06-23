import { isObject } from "./isObject";
export function isPointObject2(maybe) {
    return (isObject(maybe) &&
        typeof maybe["x"] === "number" &&
        typeof maybe["y"] === "number");
}
//# sourceMappingURL=isPointObject2.js.map