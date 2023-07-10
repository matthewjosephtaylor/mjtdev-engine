import { Idb } from "./type/Idb";
import { openIDB } from "./openIDB";
import { requestToPromise } from "./requestToPromise";
import { IdbQuery } from "./type/IdbQuery";
import { isDefined, isUndefined } from "@mjtdev/object";
import { put } from "./put";

type Producer<T> = (() => T) | (() => Promise<T>);

const isProducer = <T>(maybe: unknown): maybe is Producer<T> => {
  const straw = maybe as Producer<T>;
  return typeof straw === "function";
};

export const get = async <T>(
  idb: Idb<T>,
  query: IdbQuery,
  initial: T | Producer<T> | undefined = undefined
): Promise<T | undefined> => {
  if (isUndefined(query)) {
    return undefined;
  }
  const store = await openIDB(idb);
  const request = store.get(query);
  const valueMaybe = await requestToPromise<T>(request);
  if (isDefined(valueMaybe)) {
    return valueMaybe;
  }
  if (isDefined(initial)) {
    const initialValue = isProducer(initial) ? await initial() : initial;
    await put(idb, String(query), initialValue);
    return initialValue;
  }
  return undefined;
};
