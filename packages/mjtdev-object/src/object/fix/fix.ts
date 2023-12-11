import { isUndefined } from "./../isUndefined";
import { Fixed } from "./type/Fixed";

export const fix = <T>(v: T): Fixed<T> | undefined => {
  if (isUndefined(v)) {
    return undefined;
  }
  return Object.freeze(v) as Fixed<T>;
};
