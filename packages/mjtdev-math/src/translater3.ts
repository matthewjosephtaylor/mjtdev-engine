import { Point3 } from "./type/Point";
import { xOf } from "./xOf";
import { yOf } from "./yOf";
import { zOf } from "./zOf";


export const translater3 = (translatePoint: Point3) => (pos: Point3): Point3 => [
  xOf(translatePoint) + xOf(pos),
  yOf(translatePoint) + yOf(pos),
  zOf(translatePoint) + zOf(pos),
];
