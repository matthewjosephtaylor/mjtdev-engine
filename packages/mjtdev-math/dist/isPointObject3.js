import { isObject } from "./isObject";
export function isPointObject3(maybe) {
    return (isObject(maybe) &&
        typeof maybe["x"] === "number" &&
        typeof maybe["y"] === "number" &&
        typeof maybe["z"] === "number");
}
//# sourceMappingURL=isPointObject3.js.map