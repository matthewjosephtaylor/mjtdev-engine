import { Point0 } from "./type/Point";
import { xOf } from "./xOf";
import { contains } from "./contains";


export function divide0(a: Point0, b: Point0): Point0 {
  if (b === undefined || contains(b, 0)) {
    return undefined;
  }
  if (a === undefined) {
    return undefined;
  }
  return xOf(a) / xOf(b);
}
