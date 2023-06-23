import { isValue } from "./isValue";
import { wOf } from "./wOf";
import { zOf } from "./zOf";
import { yOf } from "./yOf";
import { xOf } from "./xOf";
export function toVec4(source) {
    if (!isValue(source)) {
        return undefined;
    }
    return [xOf(source), yOf(source), zOf(source), wOf(source)];
}
//# sourceMappingURL=toVec4.js.map