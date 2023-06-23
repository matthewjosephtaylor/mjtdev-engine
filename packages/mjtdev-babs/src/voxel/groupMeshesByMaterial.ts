import { Mesh } from "babylonjs";

export const groupMeshesByMaterial = (meshes: Mesh[]) => {
  const result: Record<string, Mesh[]> = {};

  meshes.forEach((mesh) => {
    const materialName = mesh.material.name;
    const meshes = result[materialName] ?? [];
    meshes.push(mesh);
    result[materialName] = meshes;
  });
  return result;
};
