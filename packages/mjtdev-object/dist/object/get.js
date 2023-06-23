"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = void 0;
const __1 = require("..");
const get = (obj, key, defaultValue = undefined) => {
    const value = obj[key];
    if ((0, __1.isUndefined)(value)) {
        return defaultValue;
    }
    return value;
};
exports.get = get;
//# sourceMappingURL=get.js.map