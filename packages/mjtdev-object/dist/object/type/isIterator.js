export const isIterator = (maybe) => {
    const straw = maybe;
    return typeof straw === "object" && typeof straw["next"] === "function";
};
//# sourceMappingURL=isIterator.js.map