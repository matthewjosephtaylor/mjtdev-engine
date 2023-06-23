import { isUndefined } from "..";
import { get } from "./get";
import { set, setUnsafe } from "./set";
export const update = (obj, key, mapper) => {
    const value = get(obj, key);
    if (isUndefined(value)) {
        return obj;
    }
    const updatedValue = mapper(value);
    return set(obj, key, updatedValue);
};
export const updateUnsafe = (obj, key, mapper) => {
    const value = get(obj, key);
    if (isUndefined(value)) {
        return obj;
    }
    const updatedValue = mapper(value);
    return setUnsafe(obj, key, updatedValue);
};
//# sourceMappingURL=update.js.map