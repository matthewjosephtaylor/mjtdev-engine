import { Maths, Point2 } from "@mjtdev/math";
import { GridPoint2 } from "./type/GridPoint2";

export const normalizePoint = <T>({
  grid = {},
  point = [0, 0],
}: GridPoint2<T>): Point2 => {
  const { cellWidth = 1, cellHeight = 1 } = grid;
  const [x = 0, y = 0] = Maths.toVec2(point);
  return [
    Math.floor(x / cellWidth) * cellWidth,
    Math.floor(y / cellHeight) * cellHeight,
  ];
};
