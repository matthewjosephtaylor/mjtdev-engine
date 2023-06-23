export const toStableValue = (obj) => {
    if (typeof obj === "undefined") {
        return obj;
    }
    if (typeof obj === "number") {
        return obj;
    }
    if (typeof obj === "string") {
        return obj;
    }
    if (typeof obj === "boolean") {
        return obj;
    }
    const keys = Object.keys(obj).sort();
    return JSON.stringify(keys.map((key) => [key, toStableValue(obj[key])]));
};
//# sourceMappingURL=toStableValue.js.map