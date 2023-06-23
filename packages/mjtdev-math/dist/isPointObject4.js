import { isObject } from "./isObject";
export function isPointObject4(maybe) {
    return (isObject(maybe) &&
        typeof maybe["x"] === "number" &&
        typeof maybe["y"] === "number" &&
        typeof maybe["z"] === "number" &&
        typeof maybe["w"] === "number");
}
//# sourceMappingURL=isPointObject4.js.map