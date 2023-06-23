import { isUndefined } from "..";
import { get } from "./get";
import { set, setUnsafe } from "./set";

export const update = <O extends object, K extends keyof O>(
  obj: O,
  key: K,
  mapper: (value: O[K]) => O[K]
) => {
  const value = get(obj, key);
  if (isUndefined(value)) {
    return obj;
  }
  const updatedValue = mapper(value);
  return set(obj, key, updatedValue);
};

export const updateUnsafe = <O extends object, K extends keyof O>(
  obj: O,
  key: K,
  mapper: (value: O[K]) => O[K]
) => {
  const value = get(obj, key);
  if (isUndefined(value)) {
    return obj;
  }
  const updatedValue = mapper(value);
  return setUnsafe(obj, key, updatedValue);
};
