export const chain = (initial, mappers) => {
    return mappers.reduce((acc, mapper) => {
        return mapper(acc);
    }, initial);
};
//# sourceMappingURL=chain.js.map