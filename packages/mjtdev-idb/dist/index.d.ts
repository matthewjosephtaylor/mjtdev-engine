export declare const Idbs: {
    add: <T>(idb: import("./type/Idb").Idb, key: IDBValidKey, value: T) => Promise<IDBValidKey>;
    put: <T_1>(idb: import("./type/Idb").Idb<T_1>, key: IDBValidKey, value: T_1) => Promise<IDBValidKey>;
    get: <T_2>(idb: import("./type/Idb").Idb<T_2>, query: import("./type/IdbQuery").IdbQuery, initial?: T_2 | ((() => T_2) | (() => Promise<T_2>))) => Promise<T_2>;
    list: <K extends IDBValidKey>(idb: import("./type/Idb").Idb, query?: IDBValidKey | IDBKeyRange, count?: number) => Promise<K[]>;
    remove: <T_3>(idb: import("./type/Idb").Idb, query: import("./type/IdbQuery").IdbQuery) => Promise<T_3>;
    update: <T_4>(idb: import("./type/Idb").Idb<T_4>, key: IDBValidKey, mapper: (value: T_4) => T_4 | Promise<T_4>, initial?: T_4) => Promise<T_4>;
};
export * from "./type/Idb";
export * from "./type/IdbValidValue";
export * from "./type/IdbQuery";
//# sourceMappingURL=index.d.ts.map