import { isUndefined } from "./isUndefined";

export const toBoolean = (value: string) => {
  if (isUndefined(value)) {
    return undefined;
  }
  return Boolean(value);
};
