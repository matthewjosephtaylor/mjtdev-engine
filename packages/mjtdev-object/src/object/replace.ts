import { isUndefined } from "./isUndefined";
import { TypeGuard } from "./type/TypeGuard";

export const replace = <T, A, R>(
  typeGuard: TypeGuard<T>,
  arr: A[],
  mapper: (v: T) => R
): (R | A)[] | undefined => {
  if (isUndefined(arr)) {
    return undefined;
  }
  return arr.map((a) => {
    if (typeGuard(a)) {
      return mapper(a);
    }
    return a;
  });
};
