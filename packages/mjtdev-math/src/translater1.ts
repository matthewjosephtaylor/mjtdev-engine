import { Point1 } from "./type/Point";
import { xOf } from "./xOf";


export const translater1 = (translatePoint: Point1) => (pos: Point1): Point1 => [xOf(translatePoint) + xOf(pos)];
