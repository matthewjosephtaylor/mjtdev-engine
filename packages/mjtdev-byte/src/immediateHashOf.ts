import { ADDRESS_ALGORITHM } from "./ADDRESS_ALGORITHM";
import { ImmediateByteLike } from "./type/ImmediateByteLike";
import { immediateToArrayBuffer } from "./immediateToArrayBuffer";


export const immediateHashOf = async (
  bytes: ImmediateByteLike,
  algorithm?: ADDRESS_ALGORITHM
) => {
  const buffer = immediateToArrayBuffer(bytes);
  return crypto.subtle.digest(algorithm, buffer);
};
