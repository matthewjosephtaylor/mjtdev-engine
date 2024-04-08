import { arrayBufferToBase64 } from "./arrayBufferToBase64";
import { immediateToArrayBuffer } from "./immediateToArrayBuffer";
import { isImmediateByteLike } from "./isImmediateByteLike";
import { toArrayBuffer } from "./toArrayBuffer";
import type { ByteLike } from "./type/ByteLike";
import type { EventualByteLike } from "./type/EventualByteLike";
import type { ImmediateByteLike } from "./type/ImmediateByteLike";

export function toBase64(bytes: EventualByteLike): Promise<string>;
export function toBase64(bytes: ImmediateByteLike): string;

export function toBase64(bytes: ByteLike): string | Promise<string> {
  if (isImmediateByteLike(bytes)) {
    return immediateToBase64(bytes);
  }
  return eventualToBase64(bytes);
}

export async function eventualToBase64(
  bytes: EventualByteLike
): Promise<string> {
  const ab = await toArrayBuffer(bytes);
  return arrayBufferToBase64(ab);
}

export function immediateToBase64(bytes: ImmediateByteLike): string {
  const ab = immediateToArrayBuffer(bytes);
  return arrayBufferToBase64(ab);
}
