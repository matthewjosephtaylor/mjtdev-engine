
export const requestToPromise = <T>(request: IDBRequest<T>): Promise<T> => {
  return new Promise((resolve, reject) => {
    request.onsuccess = (e) => {
      resolve(request.result);
    };
    request.onerror = (e) => {
      reject(e.target);
    };
  });
};
