import { Point2 } from "./type/Point";
import { xOf } from "./xOf";
import { yOf } from "./yOf";


export const translater2 = (translatePoint: Point2) => (pos: Point2): Point2 => [xOf(translatePoint) + xOf(pos), yOf(translatePoint) + yOf(pos)];
