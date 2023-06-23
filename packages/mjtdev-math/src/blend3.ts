import { blend } from "./blend";
import { toVec3 } from "./toVec3";
import { Point3 } from "./type/Point";

/**
 * blend two point3s via alpha
 * 0 = 100% a
 * 1 = 100% b
 * @param a
 * @param b
 * @param alpha
 */

export function blend3(a: Point3, b: Point3, alpha: Point3): Point3 {
  const [ax, ay, az] = toVec3(a);
  const [bx, by, bz] = toVec3(b);
  const [alphaX, alphaY, alphaZ] = toVec3(alpha);
  return [blend(ax, bx, alphaX), blend(ay, by, alphaY), blend(az, bz, alphaZ)];
}
