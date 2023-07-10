import { Idb } from "./type/Idb";
export declare const update: <T>(idb: Idb<T>, key: IDBValidKey, mapper: (value: T) => T | Promise<T>, initial?: T) => Promise<T>;
//# sourceMappingURL=update.d.ts.map