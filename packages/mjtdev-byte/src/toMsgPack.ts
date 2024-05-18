import { encode } from "@msgpack/msgpack";

export const toMsgPack = <T>(obj: T) => {
  return encode(obj);
};
