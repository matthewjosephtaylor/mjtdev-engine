import { distancePoint } from "./distancePoint";
import { Point } from "./type/Point";

export const includesPoint = (points: Point[], p: Point) => {
  return points.some((somePoint) => distancePoint(p, somePoint) === 0);
};
