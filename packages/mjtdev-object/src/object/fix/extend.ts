import { fix } from "./fix";
import { Fixed } from "./type/Fixed";

export const extend = <T>(arr: T[], value: T): Fixed<T[]> | undefined => {
  const unfixed = [...arr, value];
  return fix(unfixed);
};
