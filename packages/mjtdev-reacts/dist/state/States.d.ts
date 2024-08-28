export declare const States: {
    createState: <T>(init: T | (() => T)) => import("./State").StateAndUpdater<T>;
    createStateUpdater: <T>(store: import("zustand").UseBoundStore<import("zustand").StoreApi<T>>) => import("./State").StateUpdater<T>;
    updateState: <T>(doc: import("./State").StateUpdaterParam<T>, store: import("zustand").UseBoundStore<import("zustand").StoreApi<T>>) => void;
};
//# sourceMappingURL=States.d.ts.map