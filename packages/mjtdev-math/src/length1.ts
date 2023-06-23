import { Point1 } from "./type/Point";
import { xOf } from "./xOf";

export function length1(p: Point1): number {
  return Math.abs(xOf(p));
}
