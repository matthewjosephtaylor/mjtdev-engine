import { wOf } from "./wOf";
import { xOf } from "./xOf";
import { yOf } from "./yOf";
import { zOf } from "./zOf";
export const translater4 = (translatePoint) => (pos) => [
    xOf(translatePoint) + xOf(pos),
    yOf(translatePoint) + yOf(pos),
    zOf(translatePoint) + zOf(pos),
    wOf(translatePoint) + wOf(pos),
];
//# sourceMappingURL=translater4.js.map