import { blend } from "./blend";
import { Point0 } from "./type/Point";
import { xOf } from "./xOf";

/**
 * blend two points via alpha
 * 0 = 100% a
 * 1 = 100% b
 * @param a
 * @param b
 * @param alpha 0..1
 */

export function blend0(a: Point0, b: Point0, alpha: Point0): Point0 {
  return blend(xOf(a), xOf(b), xOf(alpha));
}
