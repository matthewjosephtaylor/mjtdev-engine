import { DynamicTexture } from "babylonjs";
import { Point3 } from "@mjtdev/math";
export declare const drawTextOnTexture: (texture: DynamicTexture, text: string, options?: Partial<{
    color: string;
    outline: boolean;
    outlineColor: string;
    backgroundColor: string;
    text: string;
    textureSize: number;
    textScale: number;
    rotation: Point3;
    fontFamily: string;
    fontStyle: string;
}>) => {
    x: number;
    y: number;
    width: number;
    height: number;
};
//# sourceMappingURL=drawTextOnTexture.d.ts.map