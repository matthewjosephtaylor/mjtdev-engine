import { isDefined } from "./isDefined";

export const orElse = <T>(o: T, e: T) => {
  if (isDefined(o)) {
    return o;
  }
  return e;
};
