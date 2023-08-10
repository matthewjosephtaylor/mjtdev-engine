import { baseMediaTypeOf } from "./baseMediaTypeOf";
import { listFiles } from "./listFiles";
import { mediaTypeOfPath } from "./mediatTypeOfPath";
import { openDirectoryHandle } from "./openDirectoryHandle";
import { openFileHandle } from "./openFileHandle";
import { pathToFilename } from "./pathToFilename";
import { pathToFilenameAndFolders } from "./pathToFilenameAndFolders";
import { pathToParts } from "./pathToParts";
import { readFileBrowser } from "./readFileBrowser";
import { writeFileBrowser } from "./writeFileBrowser";

export const BrowserFiles = {
  readFileBrowser,
  writeFileBrowser,
  mediaTypeOfPath,
  baseMediaTypeOf,
  openFileHandle,
  openDirectoryHandle,
  listFiles,

  pathToParts,
  pathToFilename,
  pathToFilenameAndFolders,
};
