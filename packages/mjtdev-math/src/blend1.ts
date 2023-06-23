import { blend0 } from "./blend0";
import { Point1 } from "./type/Point";
import { xOf } from "./xOf";

/**
 * blend two point1s via alpha
 * 0 = 100% a
 * 1 = 100% b
 * @param a
 * @param b
 * @param alpha
 */

export function blend1(a: Point1, b: Point1, alpha: Point1): Point1 {
  return [xOf(blend0(a, b, alpha))];
}
