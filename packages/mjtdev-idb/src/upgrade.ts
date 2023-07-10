export const upgrade = (
  dbName: string,
  storeName: string,
  version: number
): Promise<IDBObjectStore> => {
  const request = indexedDB.open(dbName, version);
  return new Promise((resolve, reject) => {
    request.onblocked = (e) => {
      console.log({ blocked: true, e });
    };
    request.onerror = (e) => {
      reject(e);
    };
    request.addEventListener("upgradeneeded", (e) => {
      if (e.target instanceof IDBOpenDBRequest) {
        const db = e.target.result;
        const objectStore = db.createObjectStore(storeName);
        resolve(objectStore);
        return;
      }
      throw new Error("Unknown IDB request target");
    });
  });
};
