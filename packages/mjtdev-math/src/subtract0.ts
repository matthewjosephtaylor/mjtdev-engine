import { Point0 } from "./type/Point";
import { xOf } from "./xOf";


export function subtract0(a: Point0, b: Point0): Point0 {
  if (b === undefined) {
    return a;
  }
  if (a === undefined) {
    return b;
  }
  return xOf(a) - xOf(b);
}
