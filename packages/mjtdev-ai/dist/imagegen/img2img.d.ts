import { StableDiffusionProcessingTxt2Img } from "./api/AutomaticApi";
export declare const img2img: (src: HTMLCanvasElement, mask: HTMLCanvasElement, options: StableDiffusionProcessingTxt2Img & Partial<{
    outpainting_fill: 0 | 1 | 2 | 3;
    inpainting_fill: 0 | 1 | 2 | 3;
}>) => Promise<import("./api/AutomaticApi").ImageToImageResponse>;
//# sourceMappingURL=img2img.d.ts.map