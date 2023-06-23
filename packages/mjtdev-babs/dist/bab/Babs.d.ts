/// <reference types="babylonjs" />
import { v3 } from "./v3";
export declare const Babs: {
    createEngine: (options?: import("babylonjs/Engines/thinEngine").EngineOptions & {
        antialias?: boolean;
        width?: number;
        height?: number;
        canvas?: HTMLCanvasElement | OffscreenCanvas;
    }) => import("babylonjs/Engines/engine").Engine;
    createCanvas: ({ width, height, }: {
        width: number;
        height: number;
    }) => HTMLCanvasElement;
    renderOnce: (scene: import("babylonjs/scene").Scene) => Promise<void>;
    v3: typeof v3;
    c3: (color: string) => import("babylonjs/Maths/math.color").Color3;
    c4: (color: string) => import("babylonjs/Maths/math.color").Color4;
    describeMesh: (mesh: import("babylonjs/Meshes/abstractMesh").AbstractMesh, search?: RegExp, depth?: number) => void;
    helloWorld: (engine?: import("babylonjs/Engines/engine").Engine) => import("babylonjs/scene").Scene;
    attachEditorControls: (camera: import("babylonjs/Cameras/arcRotateCamera").ArcRotateCamera, options?: Partial<{
        keySensitivity: number;
        mouseSensitivity: number;
        parent: HTMLElement;
        action: () => void;
    }>) => import("@mjtdev/animate").AnimateState[];
};
//# sourceMappingURL=Babs.d.ts.map