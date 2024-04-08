import type { ByteLike } from "./type/ByteLike";
import type { ADDRESS_ALGORITHM } from "./ADDRESS_ALGORITHM";
import { hashOf } from "./hashOf";
import { encodeAsString } from "./encodeAsString";

export const addressStringOf = async ({
  bytes,
  algorithm = "SHA-512",
  radix = 16,
}: {
  algorithm?: ADDRESS_ALGORITHM;
  bytes: ByteLike;
  radix?: number;
}) => {
  const idRaw = await hashOf({ bytes: bytes, algorithm });
  const encoded = await encodeAsString(idRaw, radix);
  return `${algorithm}:${encoded}`;
};
