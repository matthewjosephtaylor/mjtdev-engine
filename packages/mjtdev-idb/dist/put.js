import { openIDB } from "./openIDB";
import { requestToPromise } from "./requestToPromise";
export const put = async (idb, key, value) => {
    const store = await openIDB(idb);
    const request = store.put(value, key);
    return requestToPromise(request);
};
//# sourceMappingURL=put.js.map