export declare const ImageGens: {
    txt2img: (options: import("./api/AutomaticApi").StableDiffusionProcessingTxt2Img) => Promise<import("./api/AutomaticApi").TextToImageResponse>;
    img2img: (src: HTMLCanvasElement, mask: HTMLCanvasElement, options: import("./api/AutomaticApi").StableDiffusionProcessingTxt2Img & Partial<{
        outpainting_fill: 0 | 2 | 1 | 3;
        inpainting_fill: 0 | 2 | 1 | 3;
    }>) => Promise<import("./api/AutomaticApi").ImageToImageResponse>;
    useImageGenState: import("zustand").UseBoundStore<import("zustand").StoreApi<{
        automaticBaseUrl: string;
    }>>;
    drawTxt2Img: (canvas: HTMLCanvasElement, txt2imgOptions?: import("./api/AutomaticApi").StableDiffusionProcessingTxt2Img, canvasOptions?: Partial<{
        x: number;
        y: number;
        width: number;
        height: number;
    }>) => Promise<void>;
};
//# sourceMappingURL=ImageGens.d.ts.map