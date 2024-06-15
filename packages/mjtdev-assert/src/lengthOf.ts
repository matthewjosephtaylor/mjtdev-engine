import type { ListLike } from "./type/ListLike";

export const lengthOf = (arr: ListLike) => {
  if (Array.isArray(arr)) {
    return arr.length;
  }
  if (arr instanceof ArrayBuffer || ArrayBuffer.isView(arr)) {
    return arr.byteLength;
  }
  if (typeof arr === "object" && "length" in arr) {
    return arr.length;
  }
  return 0;
};
