import { toVec4 } from "./toVec4";
import { Point4 } from "./type/Point";


export function lengthSquared4(p: Point4): number {
  const [x, y, z, w] = toVec4(p);
  return x * x + y * y + z * z + w * w;
}
