"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.forEach = void 0;
const forEach = (obj, consumer, errorHandler = (error, key, value) => {
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
exports.forEach = forEach;
//# sourceMappingURL=forEach.js.map