import type { ByteLike } from "./type/ByteLike";
import { arrayToFloat64Array } from "./arrayToFloat64Array";

export const toBlob = (
  bytes: ByteLike,
  mediaType = "application/octet-stream"
): Blob => {
  if (bytes instanceof Blob) {
    return bytes;
  }
  if (bytes instanceof ArrayBuffer) {
    return new Blob([bytes], { type: mediaType });
  }
  if (typeof bytes === "string") {
    return new Blob([bytes], { type: mediaType });
  }
  if (ArrayBuffer.isView(bytes)) {
    return new Blob([bytes], { type: mediaType });
  }
  if (Array.isArray(bytes)) {
    return new Blob([arrayToFloat64Array(bytes)], { type: mediaType });
  }
  return new Blob([]);
};
