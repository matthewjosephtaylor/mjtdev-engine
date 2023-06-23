import { toVec2 } from "./toVec2";
import { Point2 } from "./type/Point";


export function midPoint2(a: Point2, b: Point2): Point2 {
  const [x1, y1] = toVec2(a);
  const [x2, y2] = toVec2(b);
  const x = (x1 + x2) / 2;
  const y = (y1 + y2) / 2;
  return [x, y];
}
