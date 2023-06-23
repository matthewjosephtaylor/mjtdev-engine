import { length3 } from "./length3";
import { subtract3 } from "./subtract3";
import { Point3 } from "./type/Point";

export function distance3(a: Point3, b: Point3): number {
  return length3(subtract3(a, b));
}
