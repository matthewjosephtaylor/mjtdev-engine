export declare const States: {
    createState: <T>(init: T | (() => T)) => import("./State").StateAndUpdater<T>;
    createStateUpdater: <T_1>(store: import("zustand").UseBoundStore<import("zustand").StoreApi<T_1>>) => import("./State").StateUpdater<T_1>;
    updateState: <T_2>(doc: import("./State").StateUpdaterParam<T_2>, store: import("zustand").UseBoundStore<import("zustand").StoreApi<T_2>>) => void;
};
//# sourceMappingURL=States.d.ts.map