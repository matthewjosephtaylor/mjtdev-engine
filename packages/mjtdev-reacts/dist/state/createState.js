import { create } from "zustand";
import { createStateUpdater } from "./createStateUpdater";
// export const createState = <T>(init: T): StateAndUpdater<T> => {
export const createState = (init) => {
    // const state = create<T>(=> init);
    const state = create(() => {
        if (typeof init === "function") {
            //@ts-ignore
            return init();
        }
        return init;
    });
    const updateState = createStateUpdater(state);
    const getState = () => state.getState();
    return [state, updateState, getState];
};
//# sourceMappingURL=createState.js.map