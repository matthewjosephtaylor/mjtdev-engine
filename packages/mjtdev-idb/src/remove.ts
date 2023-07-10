import { Idb } from "./type/Idb";
import { openIDB } from "./openIDB";
import { requestToPromise } from "./requestToPromise";
import { IdbQuery } from "./type/IdbQuery";

export const remove = async <T>(
  idb: Idb,
  query: IdbQuery
): Promise<T | undefined> => {
  const store = await openIDB(idb);
  const request = store.delete(query);
  return requestToPromise(request);
};
