export type FileHandle = FileSystemFileHandle;
export type DirectoryHandle = FileSystemDirectoryHandle;

export const openFileHandle = async (
  options: FilePickerOptions & { multiple: boolean }
): Promise<FileSystemFileHandle[]> => {
  return await showOpenFilePicker(options);
};
