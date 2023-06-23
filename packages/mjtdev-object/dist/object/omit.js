export const omit = (object, key) => {
    const { [key]: deletedKey, ...rest } = object;
    return rest;
};
export const omitUnsafe = (object, key) => {
    object[key] = undefined;
    return object;
};
//# sourceMappingURL=omit.js.map