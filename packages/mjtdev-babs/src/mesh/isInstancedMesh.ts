import { AbstractMesh, InstancedMesh } from "babylonjs";


export const isInstancedMesh = (mesh: AbstractMesh): mesh is InstancedMesh => {
  return mesh instanceof InstancedMesh;
};
