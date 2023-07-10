import { Key } from "./Key";
export type Cache<T> = {
    set: (key: Key, value: T) => Cache<T>;
    get: (key: Key, producer?: () => T) => T;
    findKeys: (value: T) => Key[];
    clear: () => void;
};
//# sourceMappingURL=Cache.d.ts.map