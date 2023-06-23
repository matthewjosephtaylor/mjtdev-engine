import { Point1 } from "./type/Point";
import { xOf } from "./xOf";


export function multiply1(a: Point1, b: Point1): Point1 {
  if (b === undefined) {
    return a;
  }
  if (a === undefined) {
    return b;
  }
  return [xOf(a) * xOf(b)];
}
