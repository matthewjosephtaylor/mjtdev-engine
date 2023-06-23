import { distancePoint } from "./distancePoint";
import { Point } from "./type/Point";

export const isEqual = (a: Point, b: Point) => {
  return distancePoint(a, b) === 0;
};
