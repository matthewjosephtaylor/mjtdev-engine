export declare const ImageGens: {
    txt2img: (options: import("./api/AutomaticApi").StableDiffusionProcessingTxt2Img & Partial<{
        signal: AbortSignal;
    }>) => Promise<import("./api/AutomaticApi").TextToImageResponse | undefined>;
    img2img: (src: HTMLCanvasElement, mask: HTMLCanvasElement, options: import("./api/AutomaticApi").StableDiffusionProcessingTxt2Img & Partial<{
        signal: AbortSignal;
        outpainting_fill: 0 | 1 | 2 | 3;
        inpainting_fill: 0 | 1 | 2 | 3;
    }>) => Promise<import("./api/AutomaticApi").ImageToImageResponse | undefined>;
    useImageGenState: import("zustand").UseBoundStore<import("zustand").StoreApi<{
        automaticBaseUrl: string;
        debug: boolean;
        monitor: import("..").MonitorFunction;
    }>>;
    drawTxt2Img: (canvasOrContext: HTMLCanvasElement | CanvasRenderingContext2D, txt2imgOptions?: import("./api/AutomaticApi").StableDiffusionProcessingTxt2Img, canvasOptions?: Partial<{
        x: number;
        y: number;
        width: number;
        height: number;
    }>) => Promise<void>;
};
//# sourceMappingURL=ImageGens.d.ts.map