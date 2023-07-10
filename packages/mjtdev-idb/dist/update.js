import { get } from "./get";
import { put } from "./put";
export const update = async (idb, key, mapper, initial = undefined) => {
    const value = (await get(idb, key)) ?? initial;
    const mapped = await mapper(value);
    await put(idb, key, mapped);
    return mapped;
};
//# sourceMappingURL=update.js.map