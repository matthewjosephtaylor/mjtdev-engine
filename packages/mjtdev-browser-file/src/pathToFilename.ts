import { last } from "@mjtdev/object";
import { pathToParts } from "./pathToParts";

export const pathToFilename = (path: string) => {
  const parts = pathToParts(path);
  return last(parts);
};
