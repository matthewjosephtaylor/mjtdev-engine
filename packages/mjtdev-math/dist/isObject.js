import { isValue } from "./isValue";
export function isObject(maybe) {
    return isValue(maybe) && typeof maybe === "object";
}
//# sourceMappingURL=isObject.js.map