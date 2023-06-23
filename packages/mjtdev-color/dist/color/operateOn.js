"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.operateOn = void 0;
const Colors_1 = require("./Colors");
const operateOn = (spec) => {
    if (!spec) {
        return undefined;
    }
    let color = typeof spec.color === "string" ? spec.color : "grey";
    Object.entries(spec).forEach(([operation, operand]) => {
        if (operation === "color") {
            return;
        }
        if (typeof operand === "number") {
            color = Colors_1.Colors[operation](color, operand);
        }
    });
    return color;
};
exports.operateOn = operateOn;
//# sourceMappingURL=operateOn.js.map