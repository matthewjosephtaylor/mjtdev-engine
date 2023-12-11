import { isDefined } from "./isDefined";
import { toMany } from "./toMany";

export const hasKey = (obj: Record<string, any>, key: string | string[]) => {
  const keys = toMany(key);
  return keys.filter((key) => isDefined(obj[key])).length === keys.length;
};
