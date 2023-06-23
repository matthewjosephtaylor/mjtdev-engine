import { Point1 } from "./type/Point";
import { xOf } from "./xOf";
import { contains } from "./contains";


export function divide1(a: Point1, b: Point1): Point1 {
  if (b === undefined || contains(b, 0)) {
    return undefined;
  }
  if (a === undefined) {
    return undefined;
  }
  return [xOf(a) / xOf(b)];
}
