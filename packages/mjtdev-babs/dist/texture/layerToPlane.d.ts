import { Scene } from "babylonjs";
import { TextureImageSrc } from "./TextureImageSrc";
import { TextureLayer } from "./TextureLayer";
export declare const hasValidId: (obj: {
    id: string | number;
} | string) => boolean;
export declare const idOfImageSrc: (src: TextureImageSrc) => string;
export declare const layerToPlane: (layer: TextureLayer, scene: Scene) => Promise<import("babylonjs").Mesh>;
//# sourceMappingURL=layerToPlane.d.ts.map