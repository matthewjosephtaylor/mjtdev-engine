export const safe = (f, onError = (e) => {
    console.log(e);
    return undefined;
}) => {
    try {
        return f();
    }
    catch (error) {
        return onError(error);
    }
};
//# sourceMappingURL=safe.js.map