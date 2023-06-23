import { isUndefined } from "./isUndefined";

export const isDefined = <T>(obj: T): obj is NonNullable<T> => {
  return !isUndefined(obj);
};
