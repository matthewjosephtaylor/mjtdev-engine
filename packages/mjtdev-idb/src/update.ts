import { get } from "./get";
import { put } from "./put";
import { Idb } from "./type/Idb";

export const update = async <T>(
  idb: Idb<T>,
  key: IDBValidKey,
  mapper: (value: T | undefined) => T | Promise<T>,
  initial: T | undefined = undefined
): Promise<T> => {
  const value = (await get(idb, key)) ?? initial;
  const mapped = await mapper(value);
  await put(idb, key, mapped);
  return mapped;
};
