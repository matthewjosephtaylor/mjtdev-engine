"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.last = void 0;
const isUndefined_1 = require("./isUndefined");
const last = (obj) => {
    if ((0, isUndefined_1.isUndefined)(obj)) {
        return undefined;
    }
    return obj[obj.length - 1];
};
exports.last = last;
//# sourceMappingURL=last.js.map