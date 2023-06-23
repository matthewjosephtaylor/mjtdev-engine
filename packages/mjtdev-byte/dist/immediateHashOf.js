import { immediateToArrayBuffer } from "./immediateToArrayBuffer";
export const immediateHashOf = async (bytes, algorithm) => {
    const buffer = immediateToArrayBuffer(bytes);
    return crypto.subtle.digest(algorithm, buffer);
};
//# sourceMappingURL=immediateHashOf.js.map