export const forEach = (obj, consumer, errorHandler = (error, key, value) => {
    console.error("error", error);
    console.error("object", obj);
    console.error("key", key);
    console.error("value", value);
    console.error("consumer", [consumer]);
    throw new Error("Error while iterating over object");
}) => {
    for (const key in obj) {
        const value = obj[key];
        try {
            // @ts-ignore
            consumer(key, obj[key]);
        }
        catch (error) {
            // @ts-ignore
            errorHandler(error, key, value);
        }
    }
};
//# sourceMappingURL=forEach.js.map