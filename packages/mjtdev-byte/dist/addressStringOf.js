import { hashOf } from "./hashOf";
import { encodeAsString } from "./encodeAsString";
export const addressStringOf = async ({ bytes, algorithm = "SHA-512", radix = 16, }) => {
    const idRaw = await hashOf({ bytes: bytes, algorithm });
    const encoded = await encodeAsString(idRaw, radix);
    return `${algorithm}:${encoded}`;
};
//# sourceMappingURL=addressStringOf.js.map