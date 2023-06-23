import { Strings } from "@mjtdev/string";
import { toOrderedString } from "./toOrderedString";

export const toOrderedHash = (obj: object) => {
  return Strings.hashFnv32a({ str: toOrderedString(obj) });
};
