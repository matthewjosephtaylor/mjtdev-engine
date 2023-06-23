"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fix = void 0;
const isUndefined_1 = require("./../isUndefined");
const fix = (v) => {
    if ((0, isUndefined_1.isUndefined)(v)) {
        return undefined;
    }
    return Object.freeze(v);
};
exports.fix = fix;
//# sourceMappingURL=fix.js.map