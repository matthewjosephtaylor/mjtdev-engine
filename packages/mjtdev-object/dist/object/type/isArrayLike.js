export const isArrayLike = (maybe) => {
    const straw = maybe;
    return typeof straw === "object" && typeof straw.length === "number";
};
//# sourceMappingURL=isArrayLike.js.map