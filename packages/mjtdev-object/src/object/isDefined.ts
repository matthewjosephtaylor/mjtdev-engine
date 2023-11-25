import { isUndefined } from "./isUndefined";

export const isDefined = <T>(
  obj: T | undefined | null
): obj is NonNullable<T> => {
  return !isUndefined(obj);
};
