import { decode } from "@msgpack/msgpack";

export const msgPackToObject = <T>(bytes: ArrayLike<number>) => {
  return decode(bytes) as T;
};
