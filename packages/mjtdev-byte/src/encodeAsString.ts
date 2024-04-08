import type { ByteLike } from "./type/ByteLike";
import { toArrayBuffer } from "./toArrayBuffer";

// @see https://stackoverflow.com/questions/40031688/javascript-arraybuffer-to-hex
export const encodeAsString = async (
  bytes: ByteLike,
  radix = 16
): Promise<string> => {
  const arr = await toArrayBuffer(bytes);
  return [...new Uint8Array(arr)]
    .map((x) => x.toString(radix).padStart(2, "0"))
    .join("");
};
