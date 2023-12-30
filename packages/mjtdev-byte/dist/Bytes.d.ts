import { toBase64 } from "./toBase64";
export declare const Bytes: {
    typeOfBytes: (bytes: unknown) => "string" | "Blob" | "ArrayBuffer" | "ArrayBufferView" | "Array" | undefined;
    toDataUrl: (bytes: import(".").ByteLike) => Promise<string>;
    dataUrlToBlob: (dataUrl: string) => Blob | undefined;
    lengthOf: (bytes: import(".").ByteLike) => number | undefined;
    isByteLike: (maybe: unknown) => maybe is import(".").ByteLike;
    isImmediateByteLike: (maybe: unknown) => maybe is import(".").ImmediateByteLike;
    hashOf: ({ bytes, algorithm, }: {
        algorithm?: import("./ADDRESS_ALGORITHM").ADDRESS_ALGORITHM | undefined;
        bytes: import(".").ByteLike;
    }) => Promise<ArrayBuffer>;
    immediateHashOf: (bytes: import(".").ImmediateByteLike, algorithm: import("./ADDRESS_ALGORITHM").ADDRESS_ALGORITHM) => Promise<ArrayBuffer>;
    addressStringOf: ({ bytes, algorithm, radix, }: {
        algorithm?: import("./ADDRESS_ALGORITHM").ADDRESS_ALGORITHM | undefined;
        bytes: import(".").ByteLike;
        radix?: number | undefined;
    }) => Promise<string>;
    toArrayBuffer: (bytes: import(".").ByteLike) => Promise<ArrayBuffer>;
    immediateToArrayBuffer: (bytes: import(".").ImmediateByteLike) => ArrayBuffer;
    toBlob: (bytes: import(".").ByteLike, mediaType?: string) => Blob;
    toText: (bytes: import(".").ByteLike) => Promise<string>;
    toBase64: typeof toBase64;
    encodeAsString: (bytes: import(".").ByteLike, radix?: number) => Promise<string>;
    test: () => Promise<boolean>;
    assignMediaTypeToBlob: <MT extends string>(blob: Blob, mediaType: MT) => Blob & {
        type: MT;
    };
    utf8ToUint8Array: (input: string) => Uint8Array;
    base64ToArrayBuffer: (input: string) => ArrayBuffer;
    arrayBufferToHex: (input: ArrayBuffer) => string;
    arrayBufferToUtf8: (input: ArrayBuffer) => string;
    arrayBufferToBase64: (input: ArrayBuffer) => string;
    ALL_ALGORITHMS: import("./ADDRESS_ALGORITHM").ADDRESS_ALGORITHM[];
    ALGORITHM_BYTE_LENGTHS: {
        "SHA-512": number;
        "SHA-256": number;
    };
};
//# sourceMappingURL=Bytes.d.ts.map