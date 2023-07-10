import { openIDB } from "./openIDB";
import { requestToPromise } from "./requestToPromise";
import { Idb } from "./type/Idb";

export const add = async <T>(
  idb: Idb,
  key: IDBValidKey,
  value: T
): Promise<IDBValidKey> => {
  const store = await openIDB(idb);
  const request = store.add(value, key);
  return requestToPromise(request);
};
