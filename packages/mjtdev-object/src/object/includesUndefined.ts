import { isUndefined } from "./isUndefined";


export const includesUndefined = (...arr: unknown[]) => {
  if (isUndefined(arr)) {
    return true;
  }
  arr.findIndex((x) => isUndefined(x)) === -1;
};
