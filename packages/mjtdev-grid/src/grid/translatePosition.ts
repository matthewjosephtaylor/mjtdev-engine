import { Maths, Point2 } from "@mjtdev/math";


export const translatePosition = (a: Point2, b: Point2) => {
  return Maths.subtract2(a, b);
};
