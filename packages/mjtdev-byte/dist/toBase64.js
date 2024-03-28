import { arrayBufferToBase64 } from "./arrayBufferToBase64";
import { immediateToArrayBuffer } from "./immediateToArrayBuffer";
import { isImmediateByteLike } from "./isImmediateByteLike";
import { toArrayBuffer } from "./toArrayBuffer";
export function toBase64(bytes) {
    if (isImmediateByteLike(bytes)) {
        return immediateToBase64(bytes);
    }
    return eventualToBase64(bytes);
}
export async function eventualToBase64(bytes) {
    const ab = await toArrayBuffer(bytes);
    return arrayBufferToBase64(ab);
}
export function immediateToBase64(bytes) {
    const ab = immediateToArrayBuffer(bytes);
    return arrayBufferToBase64(ab);
}
//# sourceMappingURL=toBase64.js.map