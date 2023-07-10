import { openIDB } from "./openIDB";
import { requestToPromise } from "./requestToPromise";
export const list = async (idb, query, count) => {
    const store = await openIDB(idb);
    return requestToPromise(store.getAllKeys(query, count));
};
//# sourceMappingURL=list.js.map