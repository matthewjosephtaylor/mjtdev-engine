import { isUndefined } from "./isUndefined";

export const last = <T>(obj: T[]): T => {
  if (isUndefined(obj)) {
    return undefined;
  }
  return obj[obj.length - 1];
};
