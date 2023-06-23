import { Point0 } from "./type/Point";
import { xOf } from "./xOf";

export function length0(p: Point0): number {
  return Math.abs(xOf(p));
}
