import { isDefined } from "./isDefined";


export const removeUndefinedValues = <T extends object>(
  obj: object
): Partial<T> => {
  const cleaned = Object.entries(obj).filter(([k, v]) => isDefined(v));
  return Object.fromEntries(cleaned) as Partial<T>;
};
