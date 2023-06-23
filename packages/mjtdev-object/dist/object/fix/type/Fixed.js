// | number | string | boolean;
export const isFixed = (maybe) => {
    const straw = maybe;
    return typeof straw === "object" && Object.isFrozen(straw);
};
//# sourceMappingURL=Fixed.js.map