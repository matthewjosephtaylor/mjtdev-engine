import { isUndefined } from "..";

export const get = <O extends object, K extends keyof O = keyof O>(
  obj: O,
  key: K,
  defaultValue: O[K] | undefined = undefined
): O[K] | undefined => {
  const value = obj[key];
  if (isUndefined(value)) {
    return defaultValue;
  }
  return value;
};
