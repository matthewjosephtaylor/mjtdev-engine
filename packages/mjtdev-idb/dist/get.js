import { openIDB } from "./openIDB";
import { requestToPromise } from "./requestToPromise";
import { isDefined, isUndefined } from "@mjtdev/object";
import { put } from "./put";
const isProducer = (maybe) => {
    const straw = maybe;
    return typeof straw === "function";
};
export const get = async (idb, query, initial = undefined) => {
    if (isUndefined(query)) {
        return undefined;
    }
    const store = await openIDB(idb);
    const request = store.get(query);
    const valueMaybe = await requestToPromise(request);
    if (isDefined(valueMaybe)) {
        return valueMaybe;
    }
    if (isDefined(initial)) {
        const initialValue = isProducer(initial) ? await initial() : initial;
        await put(idb, String(query), initialValue);
        return initialValue;
    }
    return undefined;
};
//# sourceMappingURL=get.js.map