import { AbstractMesh, Camera, Scene } from "babylonjs";
import { ModelMesh } from "./ModelBuilder";
export declare const pickMesh: (scene: Scene, x: number, y: number, options?: Partial<{
    camera: Camera;
    predicate: (mesh: ModelMesh) => boolean;
}>) => AbstractMesh;
//# sourceMappingURL=pickMesh.d.ts.map