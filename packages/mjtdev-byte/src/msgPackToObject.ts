import { Packr } from "msgpackr";

export const msgPackToObject = <T>(bytes: ArrayLike<number>) => {
  const packr = new Packr({ structuredClone: true });
  return packr.unpack(new Uint8Array(bytes)) as T;
};
