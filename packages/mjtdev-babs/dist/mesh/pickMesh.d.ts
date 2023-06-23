import { AbstractMesh, Camera, Scene } from "babylonjs";
export declare const pickMesh: (scene: Scene, x: number, y: number, options?: Partial<{
    camera: Camera;
    predicate: (mesh: AbstractMesh) => boolean;
}>) => AbstractMesh;
//# sourceMappingURL=pickMesh.d.ts.map