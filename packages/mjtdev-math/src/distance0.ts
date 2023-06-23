import { length0 } from "./length0";
import { subtract0 } from "./subtract0";
import { Point0 } from "./type/Point";


export function distance0(a: Point0, b: Point0): number {
  return length0(subtract0(a, b));
}
