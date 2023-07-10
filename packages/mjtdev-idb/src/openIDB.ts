import { Idb } from "./type/Idb";
import { upgrade } from "./upgrade";

export const openIDB = async (idb: Idb): Promise<IDBObjectStore> => {
  const { storeName, dbName } = idb;
  const request = indexedDB.open(dbName);

  return new Promise((resolve, reject) => {
    request.addEventListener("error", (e) => {
      reject(e);
    });

    request.addEventListener("success", async (e) => {
      if (e.target instanceof IDBOpenDBRequest) {
        const db = e.target.result;
        if (db.objectStoreNames.contains(storeName)) {
          resolve(
            db.transaction(storeName, "readwrite").objectStore(storeName)
          );
          return;
        }
        request.result.close();
        const upgraded = await upgrade(dbName, storeName, db.version + 1);
        resolve(upgraded);
        return;
      }
      throw new Error("Unknown IDB request target");
    });
  });
};
