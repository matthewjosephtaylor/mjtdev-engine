import { AbstractMesh, Camera, Scene } from "babylonjs";
export declare const pickMeshes: (scene: Scene, x: number, y: number, options?: Partial<{
    camera: Camera;
    predicate: (mesh: AbstractMesh) => boolean;
}>) => import("babylonjs").PickingInfo[];
//# sourceMappingURL=pickMeshes.d.ts.map