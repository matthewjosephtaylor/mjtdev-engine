import { toArrayBuffer } from "./toArrayBuffer";
export const hashOf = async ({ bytes, algorithm = "SHA-512", }) => {
    const buffer = await toArrayBuffer(bytes);
    return crypto.subtle.digest(algorithm, buffer);
};
//# sourceMappingURL=hashOf.js.map