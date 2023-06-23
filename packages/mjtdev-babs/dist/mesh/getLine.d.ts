import { Point3 } from "@mjtdev/math";
import { LinesMesh, Scene } from "babylonjs";
import { MeshOptions } from "./updateMesh";
export declare const getLine: (scene: Scene, name: string, options: MeshOptions & Partial<{
    points: Point3[];
    colors: string[];
    updatable: boolean;
    useVertexAlpha: boolean;
}>) => LinesMesh;
//# sourceMappingURL=getLine.d.ts.map