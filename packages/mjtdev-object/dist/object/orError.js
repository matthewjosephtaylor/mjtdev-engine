export const orError = (f, options = {}) => {
    try {
        return f();
    }
    catch (error) {
        const { message, cause } = options;
        const proximateCause = new Error(message, { cause });
        if (error instanceof Error) {
            error["cause"] = proximateCause;
            return error;
        }
        throw new Error(message, { cause: [error, cause] });
    }
};
//# sourceMappingURL=orError.js.map