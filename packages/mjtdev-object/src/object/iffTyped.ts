import { iff } from "./iff";

export const iffTyped = <T, R, G>(
  typeGuard: (maybe: unknown) => maybe is G,
  value: T,
  mapper: (v: T & G) => R
): R | undefined => {
  if (typeGuard(value)) {
    return iff(value as T & G, mapper);
  }
  return undefined;
};
