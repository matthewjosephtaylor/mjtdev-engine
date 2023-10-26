import { ImageLike } from "./ImageLike";
export declare const imageHelper: (canvas: HTMLCanvasElement) => {
    width: number;
    height: number;
    toDataURL: () => string;
    toBlob: () => Promise<unknown>;
};
export type ImageJs = ReturnType<typeof imageHelper>;
export declare const from: (src: ImageLike) => Promise<{
    update: (updater: (img: ImageJs) => ImageJs) => any;
    toDataURL: () => string;
    toBlob: () => Promise<unknown>;
    get: <T>(getter: (img: ImageJs) => T) => T;
    toHtmlImageElement: () => Promise<HTMLImageElement>;
    mapPixels: <T_1>(mapper: (pixel: number[]) => T_1) => T_1[];
}>;
//# sourceMappingURL=from.d.ts.map