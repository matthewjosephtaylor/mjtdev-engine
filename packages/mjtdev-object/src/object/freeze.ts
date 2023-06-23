import { isUndefined } from "./isUndefined";

export const freeze = <T>(v: T): Readonly<T> => {
  if (isUndefined(v)) {
    return undefined;
  }
  return Object.freeze(v);
};
