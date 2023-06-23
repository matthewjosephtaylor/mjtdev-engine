"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fixArray = void 0;
const isUndefined_1 = require("./../isUndefined");
const fix_1 = require("./fix");
const fixArray = (arr) => {
    if ((0, isUndefined_1.isUndefined)(arr)) {
        return undefined;
    }
    return (0, fix_1.fix)(arr.map(fix_1.fix));
};
exports.fixArray = fixArray;
//# sourceMappingURL=fixArray.js.map