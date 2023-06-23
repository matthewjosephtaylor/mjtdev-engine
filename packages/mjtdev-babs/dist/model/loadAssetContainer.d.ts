import { AssetContainer, ISceneLoaderProgressEvent, Scene } from "babylonjs";
export declare const loadAssetContainer: (scene: Scene, path: string | File, options?: Partial<{
    onProgress: (event: ISceneLoaderProgressEvent) => void;
}>) => Promise<AssetContainer>;
//# sourceMappingURL=loadAssetContainer.d.ts.map