"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toStableValue = void 0;
const toStableValue = (obj) => {
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
    return JSON.stringify(keys.map((key) => [key, (0, exports.toStableValue)(obj[key])]));
};
exports.toStableValue = toStableValue;
//# sourceMappingURL=toStableValue.js.map