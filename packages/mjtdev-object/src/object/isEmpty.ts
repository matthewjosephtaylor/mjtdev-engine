import { isUndefined } from "./isUndefined";

export const isEmpty = (value?: string | boolean | number | undefined) => {
  if (isUndefined(value)) {
    return true;
  }
  if (typeof value === "string") {
    return value.trim().length === 0;
  }
  return false;
};
