import { isUndefined } from "@mjtdev/object";
import { produce } from "immer";
export const updateState = (doc, store) => {
    if (typeof doc === "function") {
        store.setState((state) => {
            return produce(state, (draft) => {
                const updated = doc(draft);
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
//# sourceMappingURL=updateState.js.map