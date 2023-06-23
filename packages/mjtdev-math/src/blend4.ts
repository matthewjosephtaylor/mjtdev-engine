import { blend } from "./blend";
import { toVec4 } from "./toVec4";
import { Point4 } from "./type/Point";

/**
 * blend two point3s via alpha
 * 0 = 100% a
 * 1 = 100% b
 * @param a
 * @param b
 * @param alpha
 */

export function blend4(a: Point4, b: Point4, alpha: Point4): Point4 {
  const [ax, ay, az, aw] = toVec4(a);
  const [bx, by, bz, bw] = toVec4(b);
  const [alphaX, alphaY, alphaZ, alphaW] = toVec4(alpha);
  return [
    blend(ax, bx, alphaX),
    blend(ay, by, alphaY),
    blend(az, bz, alphaZ),
    blend(aw, bw, alphaW),
  ];
}
