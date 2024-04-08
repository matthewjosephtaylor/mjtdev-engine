import type { ADDRESS_ALGORITHM } from "./ADDRESS_ALGORITHM";

export const ALGORITHM_BYTE_LENGTHS: {
  [k in ADDRESS_ALGORITHM]: number;
} = {
  "SHA-256": 32,
  "SHA-512": 64,
};
