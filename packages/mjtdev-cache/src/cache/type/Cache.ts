import { Key } from "./Key";

export type Cache<T> = {
  set: (key: Key, value: T) => Cache<T>;
  get: (key: Key | undefined, producer?: () => T) => T | undefined;
  delete: (key: Key) => boolean;
  entries: () => [Key, T][];
  findKeys: (value: T) => Key[];
  clear: () => void;
  lastUpdate: () => number;
};
