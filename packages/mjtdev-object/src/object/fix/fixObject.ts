import { isUndefined } from "./../isUndefined";
import { Fixed } from "./type/Fixed";
import { fix } from "./fix";

export const fixObject = <T extends object>(
  obj: T
):
  | (Fixed<T> & {
      [k in string]: Fixed;
    })
  | undefined => {
  if (isUndefined(obj)) {
    return undefined;
  }
  const fixedEntries = Object.entries(obj).map(([k, v]) => [k, fix(v)]);
  return fix(Object.fromEntries(fixedEntries));
};
