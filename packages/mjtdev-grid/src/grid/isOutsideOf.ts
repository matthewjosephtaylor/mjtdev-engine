import { Point2 } from "@mjtdev/math";
import { Maths } from "@mjtdev/math";
import { Grids } from "./Grids";
import { GridObject } from "./type/GridObject";

export const isOutsideOf = ({
  position,
  grid,
  cellCount,
}: {
  cellCount: number;
  position: Point2;
  grid: GridObject;
}) => {
  const [x, y] = Maths.toVec(position);
  if (x < 0) {
    return true;
  }
  if (y < 0) {
    return true;
  }

  if (x > Grids.widthOf({ grid })) {
    return true;
  }
  if (y > Grids.heightOf({ grid, cellCount })) {
    return true;
  }
  return false;
};
