import { Point4 } from "./type/Point";
import { lengthSquared4 } from "./lengthSquared4";


export function length4(p: Point4): number {
  return Math.sqrt(lengthSquared4(p));
}
