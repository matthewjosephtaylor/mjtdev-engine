import { GridPoint2 } from "./type/GridPoint2";
import { pointToName } from "./pointToName";
import { normalizePoint } from "./normalizePoint";


export const deletePoint = <T>({ grid, point }: GridPoint2<T> & { value: T; }) => {
  const normalizedPoint = normalizePoint({ grid, point });
  delete grid.values[pointToName(normalizedPoint)];
};
