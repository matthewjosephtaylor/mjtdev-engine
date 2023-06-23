export const from = (value = 0) => {
    if (typeof value === "number") {
        return Array.from({ length: value });
    }
    return Array.from(value);
};
export const Arrays = {
    from,
};
//# sourceMappingURL=Arrays.js.map