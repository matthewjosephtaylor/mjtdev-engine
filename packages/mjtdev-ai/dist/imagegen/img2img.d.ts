import type { StableDiffusionProcessingTxt2Img } from "./api/AutomaticApi";
export declare const img2img: (src: HTMLCanvasElement, mask: HTMLCanvasElement, options: StableDiffusionProcessingTxt2Img & Partial<{
    signal: AbortSignal;
    outpainting_fill: 0 | 1 | 2 | 3;
    inpainting_fill: 0 | 1 | 2 | 3;
}>) => Promise<import("./api/AutomaticApi").ImageToImageResponse | undefined>;
//# sourceMappingURL=img2img.d.ts.map