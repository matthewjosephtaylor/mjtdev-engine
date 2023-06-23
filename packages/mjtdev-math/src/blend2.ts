import { blend } from "./blend";
import { toVec2 } from "./toVec2";
import { Point2 } from "./type/Point";

/**
 * blend two point2s via alpha
 * 0 = 100% a
 * 1 = 100% b
 * @param a
 * @param b
 * @param alpha
 */

export function blend2(a: Point2, b: Point2, alpha: Point2): Point2 {
  const [ax, ay] = toVec2(a);
  const [bx, by] = toVec2(b);
  const [alphaX, alphaY] = toVec2(alpha);
  return [blend(ax, bx, alphaX), blend(ay, by, alphaY)];
}
