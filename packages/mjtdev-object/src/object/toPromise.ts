export const toPromise = <T>(producer: (callback: () => void) => T): Promise<T> => {
  const callback = () => {}
  return new Promise((resolve, reject) => {
    try {
      resolve(producer(callback));
    } catch (error) {
      reject(error);
    }
  });
};
