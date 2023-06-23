import { Mesh, Scene } from "babylonjs";
import { MeshOptions } from "./updateMesh";
export declare const getPlane: (scene: Scene, name: string, options?: MeshOptions & Partial<{
    width: number;
    height: number;
    tag: string | string[];
    billboard: boolean;
}>) => Mesh;
//# sourceMappingURL=getPlane.d.ts.map