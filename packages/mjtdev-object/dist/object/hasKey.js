"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasKey = void 0;
const isDefined_1 = require("./isDefined");
const toMany_1 = require("./toMany");
const hasKey = (obj, key) => {
    const keys = (0, toMany_1.toMany)(key);
    return keys.filter((key) => (0, isDefined_1.isDefined)(obj[key])).length === keys.length;
};
exports.hasKey = hasKey;
//# sourceMappingURL=hasKey.js.map