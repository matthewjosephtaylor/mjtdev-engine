import { isUndefined } from "@mjtdev/object";

export const px = (value: number) => {
  if (!value) {
    return undefined;
  }
  return `${value}px`;
};
