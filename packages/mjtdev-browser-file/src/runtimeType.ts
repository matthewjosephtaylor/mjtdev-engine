import { RuntimeType } from "./type/RuntimeType";


export const runtimeType = (): RuntimeType => {
  if (typeof window === "undefined") {
    return "node";
  }
  return "browser";
};
