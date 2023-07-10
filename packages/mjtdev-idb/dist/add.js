import { openIDB } from "./openIDB";
import { requestToPromise } from "./requestToPromise";
export const add = async (idb, key, value) => {
    const store = await openIDB(idb);
    const request = store.add(value, key);
    return requestToPromise(request);
};
//# sourceMappingURL=add.js.map