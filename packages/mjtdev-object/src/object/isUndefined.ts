import { Nullable } from "./type/Nullable";

export const isUndefined = <T>(obj: T): obj is Nullable => {
  return obj === undefined || obj === null || Number.isNaN(obj);
};
