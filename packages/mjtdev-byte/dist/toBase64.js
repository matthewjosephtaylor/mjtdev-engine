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
    const arr = await toArrayBuffer(bytes);
    return btoa(String.fromCharCode(...new Uint8Array(arr)));
}
export function immediateToBase64(bytes) {
    const arr = immediateToArrayBuffer(bytes);
    return btoa(String.fromCharCode(...new Uint8Array(arr)));
}
//# sourceMappingURL=toBase64.js.map