import type { ByteLike } from "./type/ByteLike";
import type { ADDRESS_ALGORITHM } from "./ADDRESS_ALGORITHM";
import { toArrayBuffer } from "./toArrayBuffer";

export const hashOf = async ({
  bytes,
  algorithm = "SHA-512",
}: {
  algorithm?: ADDRESS_ALGORITHM;
  bytes: ByteLike;
}) => {
  const buffer = await toArrayBuffer(bytes);
  return crypto.subtle.digest(algorithm, buffer);
};

