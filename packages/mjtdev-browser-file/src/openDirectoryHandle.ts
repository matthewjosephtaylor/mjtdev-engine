import { DirectoryHandle } from "./openFileHandle";


export const openDirectoryHandle = async (
  options: DirectoryPickerOptions & { multiple: boolean; }
): Promise<DirectoryHandle> => {
  return await showDirectoryPicker(options);
};
