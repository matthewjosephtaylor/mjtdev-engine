import { AbstractMesh, Scene } from "babylonjs";


export const walkMeshes = (
  mesh: AbstractMesh | Scene,
  walker: (mesh: AbstractMesh) => void
) => {
  if (mesh instanceof Scene) {
    return mesh.meshes.forEach((m) => walkMeshes(m, walker));
  }
  walker(mesh);
  mesh.getChildMeshes().forEach((m) => walkMeshes(m, walker));
};
