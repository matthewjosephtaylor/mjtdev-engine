"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.iff = void 0;
const isDefined_1 = require("./isDefined");
const iff = (value, mapper) => {
    if ((0, isDefined_1.isDefined)(value)) {
        return mapper(value);
    }
    return undefined;
};
exports.iff = iff;
//# sourceMappingURL=iff.js.map