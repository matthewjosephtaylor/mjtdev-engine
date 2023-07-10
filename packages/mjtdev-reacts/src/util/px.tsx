import { isUndefined } from "@mjtdev/object";

export const px = (value: number) => {
  if (isUndefined(value)) {
    return undefined;
  }
  return `${value}px`;
};
