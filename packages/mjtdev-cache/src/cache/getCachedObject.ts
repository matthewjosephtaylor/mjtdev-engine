import { isDefined, isUndefined } from "@mjtdev/object";
import { Key } from "./type/Key";

export const getCachedObject = <T>(
  key: string | number | undefined,
  map: Map<Key, T>,
  producer?: () => T
) => {
  if (isUndefined(key)) {
    return undefined;
  }
  const value = map.get(key);
  if (isDefined(value)) {
    return value;
  }
  if (isDefined(producer)) {
    const product = producer();
    map.set(key, product);
    return product;
  }
  return undefined;
};
