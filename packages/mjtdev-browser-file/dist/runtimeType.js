export const runtimeType = () => {
    if (typeof window === "undefined") {
        return "node";
    }
    return "browser";
};
//# sourceMappingURL=runtimeType.js.map