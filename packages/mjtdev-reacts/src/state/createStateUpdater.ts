import { StoreApi, UseBoundStore } from "zustand";
import { StateUpdater, StateUpdaterParam } from "./State";
import { updateState } from "./updateState";

export const createStateUpdater = <T>(
  store: UseBoundStore<StoreApi<T>>
): StateUpdater<T> => {
  return (doc: StateUpdaterParam<T>) => updateState(doc, store);
};
