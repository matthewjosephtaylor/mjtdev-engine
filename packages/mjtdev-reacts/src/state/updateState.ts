import { StoreApi, UseBoundStore } from "zustand";

import { isUndefined } from "@mjtdev/object";
import { produce } from "immer";
import { StateUpdaterParam } from "./State";

export const updateState = <T>(
  doc: StateUpdaterParam<T>,
  store: UseBoundStore<StoreApi<T>>
) => {
  if (typeof doc === "function") {
    store.setState((state) => {
      return produce(state, (draft) => {
        const updated = doc(draft as T);
        if (updated === draft || isUndefined(updated)) {
          return;
        }
        return { ...draft, ...updated };
      });
    });
    return;
  }
  store.setState((state) => {
    return produce(state, (draft) => {
      return { ...draft, ...doc };
    });
  });
};
