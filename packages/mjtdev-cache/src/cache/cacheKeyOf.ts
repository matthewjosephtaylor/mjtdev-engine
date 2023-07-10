import { isFixed } from "@mjtdev/object";
import { hasId } from "./type/HasId";

let nextId = 0;

export const cacheKeyOf = <T>(value: T, prefix: string = "key"): string => {
  if (hasId(value)) {
    return String(value.id);
  }
  if (isFixed(value)) {
    return JSON.stringify(value);
  }
  // return `${prefix}-${performance.now().toString(36)}`;
  return `${prefix}-${nextId++}`;
};
