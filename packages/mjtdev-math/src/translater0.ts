import { Point0 } from "./type/Point";
import { xOf } from "./xOf";


export const translater0 = (translatePoint: Point0) => (pos: Point0): Point0 => xOf(translatePoint) + xOf(pos);
