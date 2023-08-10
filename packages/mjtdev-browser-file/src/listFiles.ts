import { FilenameHandle } from "./type/FilenameHandle";

export const listFiles = async (dir: FileSystemDirectoryHandle) => {
  const result: FilenameHandle[] = [];
  for await (const entry of dir.entries()) {
    result.push(entry);
  }
  return result;
};
