import { divide0 } from "./divide0";
import { length0 } from "./length0";
import { Point0 } from "./type/Point";


export function normalize0(p: Point0): Point0 {
  const length = length0(p);
  if (length === 1) {
    return p;
  }
  return divide0(p, length);
}
