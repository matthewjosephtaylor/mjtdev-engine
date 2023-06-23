import { TEXTURE_SAMPLING_MODES } from "./TEXTURE_SAMPLING_MODES";
import { ICanvasRenderingContext } from "babylonjs";
export type TextureSamplingModeMap = typeof TEXTURE_SAMPLING_MODES;
export type TextureOptions = Partial<{
    hasAlpha: boolean;
    generateMipMaps: boolean;
    samplingMode: keyof TextureSamplingModeMap;
}>;
export type HtmlElementTextureOptions = Partial<TextureOptions & {
    element: HTMLCanvasElement | HTMLVideoElement;
}>;
export type PathTextureOptions = Partial<TextureOptions & {
    src: string;
}>;
export type DynamicTextureOptions = Partial<TextureOptions & {
    width: number;
    height: number;
    init: (ctx: ICanvasRenderingContext) => void;
}>;
export type AllTextureOptions = HtmlElementTextureOptions & DynamicTextureOptions;
export declare const Textures: {
    builder: ({ size }?: {
        size: number;
    }) => import("./builder").TextureBuilder;
    copyToCanvas: (image: HTMLCanvasElement | OffscreenCanvas | HTMLImageElement, width?: number, height?: number) => HTMLCanvasElement;
    debugImage: (image: HTMLCanvasElement | HTMLImageElement, label?: string) => Promise<unknown>;
    getTexture: <T extends import("babylonjs").BaseTexture>(scene: import("babylonjs").Scene, name: string, producer: () => T) => T;
    getHtmlElementTexture: (scene: import("babylonjs").Scene, name: string, options: Partial<Partial<{
        hasAlpha: boolean;
        generateMipMaps: boolean;
        samplingMode: keyof TextureSamplingModeMap;
    }> & {
        element: HTMLCanvasElement | HTMLVideoElement;
    }>) => import("babylonjs").HtmlElementTexture;
    getDynamicTexture: (scene: import("babylonjs").Scene, name: string, options?: Partial<Partial<{
        hasAlpha: boolean;
        generateMipMaps: boolean;
        samplingMode: keyof TextureSamplingModeMap;
    }> & {
        width: number;
        height: number;
        init: (ctx: ICanvasRenderingContext) => void;
    }>) => import("babylonjs").DynamicTexture;
    getPathTexture: (scene: import("babylonjs").Scene, name: string, options: Partial<Partial<{
        hasAlpha: boolean;
        generateMipMaps: boolean;
        samplingMode: keyof TextureSamplingModeMap;
    }> & {
        src: string;
    }>) => import("babylonjs").Texture;
    updateTexture: (texture: import("babylonjs").BaseTexture, options: AllTextureOptions) => void;
    imageToTexture: (scene: import("babylonjs").Scene, name: string, image: string | HTMLCanvasElement | OffscreenCanvas | HTMLImageElement) => Promise<import("babylonjs").Texture>;
    drawTextOnTexture: (texture: import("babylonjs").DynamicTexture, text: string, options?: Partial<{
        color: string;
        outline: boolean;
        outlineColor: string;
        backgroundColor: string;
        text: string;
        textureSize: number;
        textScale: number;
        rotation: import("@mjtdev/math").Point3;
        fontFamily: string;
        fontStyle: string;
    }>) => {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    drawOnTexture: (texture: import("babylonjs").DynamicTexture, render: (ctx: ICanvasRenderingContext, size: {
        width: number;
        height: number;
    }) => void) => void;
    drawBackgroundOnTexture: (texture: import("babylonjs").DynamicTexture, options?: Partial<{
        color: string;
    }>) => void;
    clearTexture: (texture: import("babylonjs").DynamicTexture) => void;
    destroyTexture: (scene: import("babylonjs").Scene, name: string) => void;
};
//# sourceMappingURL=Textures.d.ts.map