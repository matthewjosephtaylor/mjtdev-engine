"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setUnsafe = exports.set = void 0;
const set = (obj, key, value) => {
    return { ...obj, ...Object.fromEntries([[key, value]]) };
};
exports.set = set;
const setUnsafe = (obj, key, value) => {
    obj[key] = value;
    return obj;
};
exports.setUnsafe = setUnsafe;
//# sourceMappingURL=set.js.map