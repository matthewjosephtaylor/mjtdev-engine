import { pointToName } from "./pointToName";
import { GridPoint2 } from "./type/GridPoint2";

export const valueAt = <T>(gridPoint: GridPoint2<T>): T => {
  const { grid, point } = gridPoint;
  const namedPoint = pointToName(point);
  return grid.values[namedPoint];
};
