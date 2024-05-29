import { isUndefined } from "./isUndefined";

export const last = <T>(obj: Readonly<T[]>): T | undefined => {
  if (isUndefined(obj)) {
    return undefined;
  }
  return obj[obj.length - 1];
};
