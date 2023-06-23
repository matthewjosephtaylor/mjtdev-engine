import { Scene } from "babylonjs";
import { MeshOptions } from "./updateMesh";
export declare const getBoxInstance: (scene: Scene, name: string, options: MeshOptions & Partial<{
    width: number;
    height: number;
    depth: number;
    receiveShadows: boolean;
}>) => import("babylonjs").InstancedMesh;
//# sourceMappingURL=getBoxInstance.d.ts.map