import type { ByteLike } from "./type/ByteLike";
import { toArrayBuffer } from "./toArrayBuffer";

export const toText = async (bytes: ByteLike): Promise<string> => {
  if (typeof bytes === "string") {
    return bytes;
  }
  const arr = await toArrayBuffer(bytes);
  const decoder = new TextDecoder();
  return decoder.decode(arr);
};
