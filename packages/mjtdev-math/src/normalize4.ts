import { divide4 } from "./divide4";
import { length4 } from "./length4";
import { Point4 } from "./type/Point";


export function normalize4(p: Point4): Point4 {
  const length = length4(p);
  if (length === 1) {
    return p;
  }
  return divide4(p, [length, length, length, length]);
}
