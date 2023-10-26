export declare const Images: {
    toHTMLImageElement: (src: import("./ImageLike").ImageLike) => Promise<HTMLImageElement>;
    toHTMLCanvasElement: (src: import("./ImageLike").ImageLike) => Promise<HTMLCanvasElement>;
    loadHTMLImageElement: (src: string) => Promise<HTMLImageElement>;
    toSrcString: (imageLike: import("./ImageLike").ImageLike) => Promise<string>;
    from: (src: import("./ImageLike").ImageLike) => Promise<{
        update: (updater: (img: {
            width: number;
            height: number;
            toDataURL: () => string;
            toBlob: () => Promise<unknown>;
        }) => {
            width: number;
            height: number;
            toDataURL: () => string;
            toBlob: () => Promise<unknown>;
        }) => any;
        toDataURL: () => string;
        toBlob: () => Promise<unknown>;
        get: <T>(getter: (img: {
            width: number;
            height: number;
            toDataURL: () => string;
            toBlob: () => Promise<unknown>;
        }) => T) => T;
        toHtmlImageElement: () => Promise<HTMLImageElement>;
        mapPixels: <T_1>(mapper: (pixel: number[]) => T_1) => T_1[];
    }>;
    toBlob: (src: import("./ImageLike").ImageLike, type?: string, quality?: number) => Promise<Blob>;
};
//# sourceMappingURL=Images.d.ts.map