import { Idb } from "./type/Idb";
import { openIDB } from "./openIDB";
import { requestToPromise } from "./requestToPromise";

export const list = async <K extends IDBValidKey>(
  idb: Idb,
  query?: IDBValidKey | IDBKeyRange | null,
  count?: number
) => {
  const store = await openIDB(idb);
  return requestToPromise(store.getAllKeys(query, count)) as Promise<K[]>;
};
