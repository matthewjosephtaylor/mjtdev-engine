"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toMany = void 0;
const isUndefined_1 = require("./isUndefined");
const isIterable_1 = require("./type/isIterable");
const toMany = (obj) => {
    if ((0, isUndefined_1.isUndefined)(obj)) {
        return [];
    }
    if ((0, isIterable_1.isIterable)(obj)) {
        return Array.from(obj);
    }
    return Array.isArray(obj) ? obj : [obj];
};
exports.toMany = toMany;
//# sourceMappingURL=toMany.js.map