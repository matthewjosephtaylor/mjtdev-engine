/// <reference types="wicg-file-system-access" />
export declare const BrowserFiles: {
    readFileBrowser: (path: string) => Promise<import(".").Fil>;
    writeFileBrowser: (path: string, data: import("@mjtdev/byte").ByteLike) => void;
    mediaTypeOfPath: (path: string) => string;
    baseMediaTypeOf: (mediaType: string) => string;
    openFileHandle: (options: FilePickerOptions & {
        multiple: boolean;
    }) => Promise<FileSystemFileHandle[]>;
    openDirectoryHandle: (options: DirectoryPickerOptions & {
        multiple: boolean;
    }) => Promise<FileSystemDirectoryHandle>;
    listFiles: (dir: FileSystemDirectoryHandle) => Promise<import(".").FilenameHandle[]>;
    pathToParts: (path: string) => string[];
    pathToFilename: (path: string) => string;
    pathToFilenameAndFolders: (path: string) => import("@mjtdev/object").Tuple2<string, string[]>;
};
//# sourceMappingURL=BrowserFiles.d.ts.map