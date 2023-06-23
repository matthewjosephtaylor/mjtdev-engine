"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orElse = void 0;
const isDefined_1 = require("./isDefined");
const orElse = (o, e) => {
    if ((0, isDefined_1.isDefined)(o)) {
        return o;
    }
    return e;
};
exports.orElse = orElse;
//# sourceMappingURL=orElse.js.map