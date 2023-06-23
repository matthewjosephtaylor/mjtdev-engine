export const set = (obj, key, value) => {
    return { ...obj, ...Object.fromEntries([[key, value]]) };
};
export const setUnsafe = (obj, key, value) => {
    obj[key] = value;
    return obj;
};
//# sourceMappingURL=set.js.map