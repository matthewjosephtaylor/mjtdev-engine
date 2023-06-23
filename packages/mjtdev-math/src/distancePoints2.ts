import { aOf } from "./aOf";
import { bOf } from "./bOf";
import { Point2 } from "./type/Point";
import { distancePoint } from "./distancePoint";


export function distancePoints2(points: Point2[]): number {
  return distancePoint(aOf(points), bOf(points));
}
