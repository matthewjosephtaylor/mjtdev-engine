import { divide1 } from "./divide1";
import { length1 } from "./length1";
import { Point1 } from "./type/Point";


export function normalize1(p: Point1): Point1 {
  const length = length1(p);
  if (length === 1) {
    return p;
  }
  return divide1(p, [length]);
}
