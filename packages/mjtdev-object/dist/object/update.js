"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUnsafe = exports.update = void 0;
const __1 = require("..");
const get_1 = require("./get");
const set_1 = require("./set");
const update = (obj, key, mapper) => {
    const value = (0, get_1.get)(obj, key);
    if ((0, __1.isUndefined)(value)) {
        return obj;
    }
    const updatedValue = mapper(value);
    return (0, set_1.set)(obj, key, updatedValue);
};
exports.update = update;
const updateUnsafe = (obj, key, mapper) => {
    const value = (0, get_1.get)(obj, key);
    if ((0, __1.isUndefined)(value)) {
        return obj;
    }
    const updatedValue = mapper(value);
    return (0, set_1.setUnsafe)(obj, key, updatedValue);
};
exports.updateUnsafe = updateUnsafe;
//# sourceMappingURL=update.js.map