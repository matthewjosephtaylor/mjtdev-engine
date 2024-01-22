import { isUndefined } from "./isUndefined";

export const toNumber = (value: string) => {
  if (isUndefined(value)) {
    return undefined;
  }
  return Number(value);
};
