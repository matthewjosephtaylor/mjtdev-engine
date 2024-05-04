export declare const Models: {
    renderOnce: (scene: import("@babylonjs/core").Scene) => Promise<void>;
    loadDazFigure: (props: {
        path: string | File;
        scene: import("@babylonjs/core").Scene;
        name?: string | undefined;
    }) => Promise<import("@babylonjs/core").AbstractMesh>;
    fixDazFigure: (scene: import("@babylonjs/core").Scene) => void;
    loadAssetContainer: (scene: import("@babylonjs/core").Scene, path: string | File, options?: Partial<{
        onProgress: (event: import("@babylonjs/core").ISceneLoaderProgressEvent) => void;
    }>) => Promise<import("@babylonjs/core").AssetContainer>;
    builder: (props?: {
        scene?: import("@babylonjs/core").Scene | undefined;
        path?: import("./ModelBuilder").ModelPath | undefined;
        exposure?: number | undefined;
        toneMappingEnabled?: boolean | undefined;
        addDefaultLights?: boolean | undefined;
        clearColor?: string | undefined;
    }) => Promise<import("./ModelBuilder").ModelBuilder>;
};
//# sourceMappingURL=Models.d.ts.map