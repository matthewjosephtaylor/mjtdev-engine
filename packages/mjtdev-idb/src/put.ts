import { openIDB } from "./openIDB";
import { requestToPromise } from "./requestToPromise";
import { Idb } from "./type/Idb";

export const put = async <T>(
  idb: Idb<T>,
  key: IDBValidKey,
  value: T
): Promise<IDBValidKey> => {
  const store = await openIDB(idb);
  const request = store.put(value, key);
  return requestToPromise(request);
};
