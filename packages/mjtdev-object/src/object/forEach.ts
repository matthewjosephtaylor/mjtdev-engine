import { isDefined } from "..";

export const forEach = <O extends object, K extends keyof O>(
  obj: O,
  consumer: (key: K, value: O[K]) => void,
  errorHandler: (error: unknown, key: K, value: O[K]) => void = (
    error,
    key,
    value
  ) => {
    console.error("error", error);
    console.error("object", obj);
    console.error("key", key);
    console.error("value", value);
    console.error("consumer", [consumer]);
    throw new Error("Error while iterating over object");
  }
): void => {
  for (const key in obj) {
    const value = obj[key];
    try {
      // @ts-ignore
      consumer(key, obj[key]);
    } catch (error) {
      // @ts-ignore
      errorHandler(error, key, value);
    }
  }
};
