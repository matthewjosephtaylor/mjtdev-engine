import { Scene } from "babylonjs";
import { MeshOptions } from "./updateMesh";
export type BoxOptions = Partial<{
    width: number;
    height: number;
    depth: number;
    colors: string[];
}>;
export declare const getBox: (scene: Scene, name: string, options?: MeshOptions & BoxOptions) => import("babylonjs").Mesh;
//# sourceMappingURL=getBox.d.ts.map