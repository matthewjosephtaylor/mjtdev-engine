import type { ByteLike } from "./type/ByteLike";



export const lengthOf = (bytes: ByteLike) => {
  if (typeof bytes === "string") {
    return bytes.length;
  }
  if (bytes instanceof Blob) {
    return bytes.size;
  }
  if (bytes instanceof ArrayBuffer) {
    return bytes.byteLength;
  }
  if (ArrayBuffer.isView(bytes)) {
    return bytes.byteLength;
  }
};
