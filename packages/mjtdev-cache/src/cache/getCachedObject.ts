import { isDefined } from "@mjtdev/object";
import { Cache } from "./type/Cache";
import { Key } from "./type/Key";

export const getCachedObject = <T>(
  key: string | number,
  map: Map<Key,T>,
  producer?: () => T
) => {
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
