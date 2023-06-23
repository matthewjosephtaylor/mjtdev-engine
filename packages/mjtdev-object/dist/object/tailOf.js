"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tailOf = void 0;
const isUndefined_1 = require("./isUndefined");
const tailOf = (obj) => {
    if ((0, isUndefined_1.isUndefined)(obj)) {
        return undefined;
    }
    return obj.slice(1);
};
exports.tailOf = tailOf;
//# sourceMappingURL=tailOf.js.map