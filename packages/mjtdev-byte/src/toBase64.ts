import { immediateToArrayBuffer } from "./immediateToArrayBuffer";
import { isImmediateByteLike } from "./isImmediateByteLike";
import { toArrayBuffer } from "./toArrayBuffer";
import { ByteLike } from "./type/ByteLike";
import { EventualByteLike } from "./type/EventualByteLike";
import { ImmediateByteLike } from "./type/ImmediateByteLike";

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
  const arr = await toArrayBuffer(bytes);
  return btoa(String.fromCharCode(...new Uint8Array(arr)));
}

export function immediateToBase64(bytes: ImmediateByteLike): string {
  const arr = immediateToArrayBuffer(bytes);
  return btoa(String.fromCharCode(...new Uint8Array(arr)));
}


