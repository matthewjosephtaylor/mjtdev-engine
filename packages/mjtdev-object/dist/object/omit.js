"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.omitUnsafe = exports.omit = void 0;
const omit = (object, key) => {
    const { [key]: deletedKey, ...rest } = object;
    return rest;
};
exports.omit = omit;
const omitUnsafe = (object, key) => {
    object[key] = undefined;
    return object;
};
exports.omitUnsafe = omitUnsafe;
//# sourceMappingURL=omit.js.map