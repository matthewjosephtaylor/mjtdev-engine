import { InstancedMesh, Mesh, Scene } from "babylonjs";
import { Point2, Point3 } from "@mjtdev/math";
export type MeshOptions = Partial<{
    position: Point3 | Point2;
    color: string;
    material: string;
    receiveShadows: boolean;
}>;
export declare const updateMesh: (scene: Scene, mesh: Mesh | InstancedMesh, options: MeshOptions) => void;
//# sourceMappingURL=updateMesh.d.ts.map