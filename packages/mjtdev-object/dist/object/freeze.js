"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.freeze = void 0;
const isUndefined_1 = require("./isUndefined");
const freeze = (v) => {
    if ((0, isUndefined_1.isUndefined)(v)) {
        return undefined;
    }
    return Object.freeze(v);
};
exports.freeze = freeze;
//# sourceMappingURL=freeze.js.map