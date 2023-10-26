import { updateState } from "./updateState";
export const createStateUpdater = (store) => {
    return (doc) => updateState(doc, store);
};
//# sourceMappingURL=createStateUpdater.js.map