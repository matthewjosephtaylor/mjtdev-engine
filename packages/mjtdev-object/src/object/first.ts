import { isUndefined } from "./isUndefined";
import { isIterator } from "./type/isIterator";
import type { TypeGuard } from "./type/TypeGuard";

export const first = <O, T extends O>(
  obj: Readonly<O[] | O | Iterator<O, T>>,
  typeGuard: TypeGuard<T> = (v): v is T => true
): T | undefined => {
  if (isUndefined(obj)) {
    return undefined;
  }
  if (Array.isArray(obj)) {
    return obj.find(typeGuard);
  }
  if (isIterator(obj) && typeGuard(obj)) {
    return obj.next().value as T;
  }

  return obj as T;
};
