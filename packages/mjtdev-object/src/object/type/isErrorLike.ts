import { isDefined } from "../isDefined";
import type { ErrorLike } from "./ErrorLike";

export const isErrorLike = (maybe: unknown): maybe is ErrorLike => {
  const straw = maybe as ErrorLike;
  return (
    typeof straw === "object" &&
    (typeof straw.message === "string" ||
      typeof straw.stack === "string" ||
      isDefined(straw.cause))
  );
};
