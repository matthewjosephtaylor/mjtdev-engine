import { AbstractMesh, Ray, Scene, TrianglePickingPredicate } from "babylonjs";


export const pickWithRay = (
  scene: Scene,
  ray: Ray,
  options: Partial<{
    predicate: (mesh: AbstractMesh) => boolean;
    fastCheck: boolean;
    trianglePredicate: TrianglePickingPredicate;
  }> = {}
) => {
  const {
    trianglePredicate, fastCheck, predicate = (mesh: AbstractMesh) => mesh.isPickable,
  } = options;
  return scene.pickWithRay(ray, predicate, fastCheck, trianglePredicate);
};
