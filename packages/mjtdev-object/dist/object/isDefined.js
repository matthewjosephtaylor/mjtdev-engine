"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDefined = void 0;
const isUndefined_1 = require("./isUndefined");
const isDefined = (obj) => {
    return !(0, isUndefined_1.isUndefined)(obj);
};
exports.isDefined = isDefined;
//# sourceMappingURL=isDefined.js.map