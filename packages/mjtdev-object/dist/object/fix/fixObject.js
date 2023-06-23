"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fixObject = void 0;
const isUndefined_1 = require("./../isUndefined");
const fix_1 = require("./fix");
const fixObject = (obj) => {
    if ((0, isUndefined_1.isUndefined)(obj)) {
        return undefined;
    }
    const fixedEntries = Object.entries(obj).map(([k, v]) => [k, (0, fix_1.fix)(v)]);
    return (0, fix_1.fix)(Object.fromEntries(fixedEntries));
};
exports.fixObject = fixObject;
//# sourceMappingURL=fixObject.js.map