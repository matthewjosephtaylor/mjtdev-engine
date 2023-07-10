import { isUndefined } from "@mjtdev/object";

export const unPx = (value: string) => {
  if (isUndefined(value)) {
    return undefined;
  }
  const result = value.replace(/px/i, "");
  return Number(result);
};
