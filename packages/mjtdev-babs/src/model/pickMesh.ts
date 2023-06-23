import { AbstractMesh, Camera, Matrix, Scene } from "babylonjs";
import { ModelMesh } from "./ModelBuilder";

export const pickMesh = (
  scene: Scene,
  x: number,
  y: number,
  options: Partial<{
    camera: Camera;
    predicate: (mesh: ModelMesh) => boolean;
  }> = {}
): AbstractMesh => {
  const { camera = scene.activeCamera, predicate = () => true } = options;
  const ray = scene.createPickingRay(x, y, Matrix.Identity(), camera);
  const hit = scene.pickWithRay(ray, predicate);
  return hit.pickedMesh;
};
