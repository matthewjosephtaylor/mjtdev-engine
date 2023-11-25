import { Nullable } from "./type/Nullable";

export const isUndefined = <T>(obj: T | undefined | null): obj is undefined => {
  return obj === undefined || obj === null || Number.isNaN(obj);
};
