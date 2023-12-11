import { isUndefined } from "./../isUndefined";
import { Fixed } from "./type/Fixed";
import { fix } from "./fix";

export const fixArray = <T>(arr: T[]): FixedArray<T> | undefined => {
  if (isUndefined(arr)) {
    return undefined;
  }
  return fix(arr.map(fix)) as FixedArray<T>;
};

//Fixed<T>[]>' is not assignable to type 'Fixed<Fixed<T[]>>'.
export type FixedArray<T> = Fixed<T[]> | Fixed<Fixed<T[]>> | Fixed<Fixed<T>[]>;
