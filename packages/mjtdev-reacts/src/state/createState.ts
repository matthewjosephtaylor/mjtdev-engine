import { create } from "zustand";
import { createStateUpdater } from "./createStateUpdater";
import { StateAndUpdater, StateGetter, StateUpdater } from "./State";

// export const createState = <T>(init: T): StateAndUpdater<T> => {
export const createState = <T>(init: T): StateAndUpdater<T> => {
  const state = create<T>(() => init);
  const updateState: StateUpdater<T> = createStateUpdater(state);
  const getState: StateGetter<T> = () => state.getState();
  return [state, updateState, getState] as const;
};
