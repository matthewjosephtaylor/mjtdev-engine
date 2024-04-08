import type { ImmediateByteLike } from "./type/ImmediateByteLike";
import { arrayToFloat64Array } from "./arrayToFloat64Array";


export const immediateToArrayBuffer = (
  bytes: ImmediateByteLike
): ArrayBuffer => {
  if (bytes instanceof ArrayBuffer) {
    return bytes;
  }
  if (typeof bytes === "string") {
    const encoder = new TextEncoder();
    return encoder.encode(bytes);
  }
  if (ArrayBuffer.isView(bytes)) {
    return bytes.buffer;
  }
  if (Array.isArray(bytes)) {
    return arrayToFloat64Array(bytes);
  }
  return new ArrayBuffer(0);
};
