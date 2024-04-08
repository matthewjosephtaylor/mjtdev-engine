import { isImmediateByteLike } from "./isImmediateByteLike";
import type { ByteLike } from "./type/ByteLike";

export const isByteLike = (maybe: unknown): maybe is ByteLike => {
  if (maybe instanceof Blob) {
    return true;
  }
  return isImmediateByteLike(maybe);
};
