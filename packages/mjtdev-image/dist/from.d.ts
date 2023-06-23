import { ImageLike } from "./ImageLike";
import ImageJs from "image-js";
export declare const from: (src: ImageLike) => Promise<{
    update: (updater: (img: ImageJs) => ImageJs) => any;
    toDataURL: () => string;
    toBlob: () => Promise<Blob>;
    get: <T>(getter: (img: ImageJs) => T) => T;
    toHtmlImageElement: () => Promise<HTMLImageElement>;
    mapPixels: <T_1>(mapper: (pixel: number[]) => T_1) => T_1[];
}>;
//# sourceMappingURL=from.d.ts.map