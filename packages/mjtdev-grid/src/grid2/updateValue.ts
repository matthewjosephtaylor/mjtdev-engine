import { GridPoint2 } from "./type/GridPoint2";
import { pointToName } from "./pointToName";
import { normalizePoint } from "./normalizePoint";
import { valueAt } from "./valueAt";


export const updateValue = <T>({
  grid, point, mapper,
}: GridPoint2<T> & { mapper: (v: T) => T; }) => {
  const normalizedPoint = normalizePoint({ grid, point });
  const updated = mapper(valueAt({ grid, point }));
  grid.values[pointToName(normalizedPoint)] = updated;
};
