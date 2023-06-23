"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.valueOf = void 0;
const Producer_1 = require("./type/Producer");
const valueOf = (valueProducer) => {
    if ((0, Producer_1.isProducer)(valueProducer)) {
        return valueProducer();
    }
    return valueProducer;
};
exports.valueOf = valueOf;
//# sourceMappingURL=valueOf.js.map