import { StableDiffusionProcessingTxt2Img, TextToImageResponse } from "./api/AutomaticApi";
export declare const txt2img: (options: StableDiffusionProcessingTxt2Img & Partial<{
    signal: AbortSignal;
}>) => Promise<TextToImageResponse>;
//# sourceMappingURL=txt2img.d.ts.map