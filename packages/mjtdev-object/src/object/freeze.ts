import { isUndefined } from "./isUndefined";

export const freeze = <T>(v: T): Readonly<T | undefined> => {
  if (isUndefined(v)) {
    return undefined;
  }
  return Object.freeze(v);
};
