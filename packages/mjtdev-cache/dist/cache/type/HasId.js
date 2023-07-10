export const hasId = (maybe) => {
    const straw = maybe;
    return (typeof straw === "object" &&
        (typeof straw.id === "number" || typeof straw.id === "string"));
};
//# sourceMappingURL=HasId.js.map