import { isDefined } from "./isDefined";

export const iff = <T, R>(
  value: T,
  mapper: (v: NonNullable<T>) => R
): R | undefined => {
  if (isDefined(value)) {
    return mapper(value);
  }
  return undefined;
};
