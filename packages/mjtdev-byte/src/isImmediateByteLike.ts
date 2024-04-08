import type { ImmediateByteLike } from "./type/ImmediateByteLike";


export const isImmediateByteLike = (maybe: unknown): maybe is ImmediateByteLike => {
  const straw = maybe as ImmediateByteLike;

  if (straw instanceof ArrayBuffer) {
    return true;
  }
  if (typeof straw === "string") {
    return true;
  }
  if (ArrayBuffer.isView(straw)) {
    return true;
  }
  if (Array.isArray(straw)) {
    return true;
  }
  return false;
};
