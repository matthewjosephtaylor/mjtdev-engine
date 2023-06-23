import { xOf } from "./xOf";
import { yOf } from "./yOf";
import { zOf } from "./zOf";
export const translater3 = (translatePoint) => (pos) => [
    xOf(translatePoint) + xOf(pos),
    yOf(translatePoint) + yOf(pos),
    zOf(translatePoint) + zOf(pos),
];
//# sourceMappingURL=translater3.js.map