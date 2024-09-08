import type { UseBoundStore, StoreApi } from "zustand";
export type State<T> = UseBoundStore<StoreApi<T>>;
export type StateUpdaterParam<T> = Partial<T> | ((state: T) => Partial<T> | void);
export type StateUpdater<T> = (doc: StateUpdaterParam<T>) => void;
export type StateGetter<T> = () => T;
export type StateAndUpdater<T> = readonly [
    State<T>,
    StateUpdater<T>,
    StateGetter<T>
];
//# sourceMappingURL=State.d.ts.map