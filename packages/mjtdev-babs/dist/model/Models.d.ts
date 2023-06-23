/// <reference types="babylonjs" />
export declare const Models: {
    renderOnce: (scene: import("babylonjs/scene").Scene) => Promise<void>;
    loadDazFigure: (props: {
        path: string | File;
        scene: import("babylonjs/scene").Scene;
        name?: string;
    }) => Promise<import("babylonjs/Meshes/abstractMesh").AbstractMesh>;
    fixDazFigure: (scene: import("babylonjs/scene").Scene) => void;
    loadAssetContainer: (scene: import("babylonjs/scene").Scene, path: string | File, options?: Partial<{
        onProgress: (event: import("babylonjs/Loading/sceneLoader").ISceneLoaderProgressEvent) => void;
    }>) => Promise<import("babylonjs/assetContainer").AssetContainer>;
    builder: (props?: {
        scene?: import("babylonjs/scene").Scene;
        path?: import("./ModelBuilder").ModelPath;
        exposure?: number;
        toneMappingEnabled?: boolean;
        addDefaultLights?: boolean;
        clearColor?: string;
    }) => Promise<import("./ModelBuilder").ModelBuilder>;
};
//# sourceMappingURL=Models.d.ts.map