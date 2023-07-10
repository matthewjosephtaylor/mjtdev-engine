import { openIDB } from "./openIDB";
import { requestToPromise } from "./requestToPromise";
export const remove = async (idb, query) => {
    const store = await openIDB(idb);
    const request = store.delete(query);
    return requestToPromise(request);
};
//# sourceMappingURL=remove.js.map