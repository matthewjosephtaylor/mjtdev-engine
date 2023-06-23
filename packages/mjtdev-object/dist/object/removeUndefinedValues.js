"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeUndefinedValues = void 0;
const isDefined_1 = require("./isDefined");
const removeUndefinedValues = (obj) => {
    const cleaned = Object.entries(obj).filter(([k, v]) => (0, isDefined_1.isDefined)(v));
    return Object.fromEntries(cleaned);
};
exports.removeUndefinedValues = removeUndefinedValues;
//# sourceMappingURL=removeUndefinedValues.js.map