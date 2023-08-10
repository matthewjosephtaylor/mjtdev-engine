import { last, tuple2 } from "@mjtdev/object";
import { pathToParts } from "./pathToParts";


export const pathToFilenameAndFolders = (path: string) => {
  const parts = pathToParts(path);
  return tuple2(last(parts), parts.slice(0, parts.length - 1));
};
