import { GridPoint2 } from "./type/GridPoint2";
import { pointToName } from "./pointToName";
import { normalizePoint } from "./normalizePoint";

export const setValue = <T>({
  grid,
  point,
  value,
}: GridPoint2<T> & { value: T }) => {
  const normalizedPoint = normalizePoint({ grid, point });
  grid.values[pointToName(normalizedPoint)] = value;
};


