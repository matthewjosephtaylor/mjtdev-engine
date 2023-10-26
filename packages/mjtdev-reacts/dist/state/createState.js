import { create } from "zustand";
import { createStateUpdater } from "./createStateUpdater";
// export const createState = <T>(init: T): StateAndUpdater<T> => {
export const createState = (init) => {
    const state = create(() => init);
    const updateState = createStateUpdater(state);
    const getState = () => state.getState();
    return [state, updateState, getState];
};
//# sourceMappingURL=createState.js.map