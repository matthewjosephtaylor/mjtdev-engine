export const filter = (obj, predicate) => {
    return Object.entries(obj).filter((entry) => {
        const [k, v] = entry;
        return predicate(k, v);
    });
};
//# sourceMappingURL=filter.js.map