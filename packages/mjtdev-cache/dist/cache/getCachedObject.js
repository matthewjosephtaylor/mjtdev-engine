import { isDefined } from "@mjtdev/object";
export const getCachedObject = (key, map, producer) => {
    const value = map.get(key);
    if (isDefined(value)) {
        return value;
    }
    if (isDefined(producer)) {
        const product = producer();
        map.set(key, product);
        return product;
    }
    return undefined;
};
//# sourceMappingURL=getCachedObject.js.map