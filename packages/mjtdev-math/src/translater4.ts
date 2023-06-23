import { Point4 } from "./type/Point";
import { wOf } from "./wOf";
import { xOf } from "./xOf";
import { yOf } from "./yOf";
import { zOf } from "./zOf";


export const translater4 = (translatePoint: Point4) => (pos: Point4): Point4 => [
  xOf(translatePoint) + xOf(pos),
  yOf(translatePoint) + yOf(pos),
  zOf(translatePoint) + zOf(pos),
  wOf(translatePoint) + wOf(pos),
];
