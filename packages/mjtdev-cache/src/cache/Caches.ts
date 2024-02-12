import { Stats } from "@mjtdev/stat";
import { getCachedObject } from "./getCachedObject";
import { Cache } from "./type/Cache";
import { Key } from "./type/Key";

let nextId = 0;
const create = <T>(
  // name: string = `cache-${performance.now().toString(36)}`
  name: string = `cache-${nextId++}`
): Cache<T> => {
  const state = new Map<Key, T>();
  let lastUpdated = performance.now();
  const cache: Cache<T> = {
    get: (key, producer) => getCachedObject(key, state, producer),
    set: (key, value) => {
      state.set(key, value);
      Stats.set(`cache.${name}.total`, state.size);
      return cache;
    },
    delete: (key) => {
      return state.delete(key);
    },
    entries: () => Array.from(state.entries()),
    clear: () => state.clear(),
    findKeys: (value) => {
      const entries = Array.from(state.entries());
      return entries.filter(([k, v]) => v === value).map(([k, v]) => k);
    },
    lastUpdate: () => lastUpdated,
  };
  return cache;
};

export const Caches = {
  create,
};
