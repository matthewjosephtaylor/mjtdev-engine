"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.first = void 0;
const isUndefined_1 = require("./isUndefined");
const isIterator_1 = require("./type/isIterator");
const first = (obj, typeGuard = (v) => true) => {
    if ((0, isUndefined_1.isUndefined)(obj)) {
        return undefined;
    }
    if (Array.isArray(obj)) {
        return obj.find(typeGuard);
    }
    if ((0, isIterator_1.isIterator)(obj) && typeGuard(obj)) {
        return obj.next().value;
    }
    return obj;
};
exports.first = first;
//# sourceMappingURL=first.js.map