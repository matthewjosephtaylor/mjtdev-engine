import { MeshBuilder, Scene } from "babylonjs";
import { getMesh } from "./getMesh";
import { MeshOptions, updateMesh } from "./updateMesh";

export const getTorusKnot = (
  scene: Scene,
  name: string,
  options: MeshOptions &
    Partial<{
      radius: number;
      material: string;
    }> = {}
) => {
  return getMesh(scene, name, () => {
    const { radius = 0.5 } = options;
    const mesh = MeshBuilder.CreateTorusKnot(name, { radius }, scene);
    updateMesh(scene, mesh, options);
    return mesh;
  });
};
