import { InstancedMesh, Mesh, Scene } from "babylonjs";
export declare const getMesh: <T extends Mesh | InstancedMesh>(scene: Scene, name: string, producer?: (instance?: T) => T, updatable?: boolean) => T;
//# sourceMappingURL=getMesh.d.ts.map