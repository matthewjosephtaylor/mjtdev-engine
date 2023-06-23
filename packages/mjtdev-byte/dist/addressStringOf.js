"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addressStringOf = void 0;
const hashOf_1 = require("./hashOf");
const encodeAsString_1 = require("./encodeAsString");
const addressStringOf = async ({ bytes, algorithm = "SHA-512", radix = 16, }) => {
    const idRaw = await (0, hashOf_1.hashOf)({ bytes: bytes, algorithm });
    const encoded = await (0, encodeAsString_1.encodeAsString)(idRaw, radix);
    return `${algorithm}:${encoded}`;
};
exports.addressStringOf = addressStringOf;
//# sourceMappingURL=addressStringOf.js.map