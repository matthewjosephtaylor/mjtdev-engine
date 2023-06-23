import { length4 } from "./length4";
import { subtract4 } from "./subtract4";
import { Point4 } from "./type/Point";


export function distance4(a: Point4, b: Point4): number {
  return length4(subtract4(a, b));
}
