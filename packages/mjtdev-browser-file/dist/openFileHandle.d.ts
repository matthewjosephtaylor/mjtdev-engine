/// <reference types="wicg-file-system-access" />
export type FileHandle = FileSystemFileHandle;
export type DirectoryHandle = FileSystemDirectoryHandle;
export declare const openFileHandle: (options: FilePickerOptions & {
    multiple: boolean;
}) => Promise<FileSystemFileHandle[]>;
//# sourceMappingURL=openFileHandle.d.ts.map