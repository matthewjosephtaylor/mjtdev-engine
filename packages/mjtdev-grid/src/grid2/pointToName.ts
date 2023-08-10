import { Maths, Point2 } from "@mjtdev/math";


export const pointToName = (point: Point2): string => {
  const [x, y] = Maths.toVec2(point);
  return `${x},${y}`;
};
