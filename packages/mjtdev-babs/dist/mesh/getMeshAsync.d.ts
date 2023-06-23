import { InstancedMesh, Mesh, Scene } from "babylonjs";
export declare const getMeshAsync: <T extends Mesh | InstancedMesh>(scene: Scene, name: string, producer?: () => Promise<T>) => Promise<T>;
//# sourceMappingURL=getMeshAsync.d.ts.map