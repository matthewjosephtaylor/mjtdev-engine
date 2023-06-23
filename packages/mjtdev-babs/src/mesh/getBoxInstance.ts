import { isUndefined } from "@mjtdev/object";
import { Mesh, MeshBuilder, Scene } from "babylonjs";
import { getMaterial } from "../material/getMaterial";
import { MeshOptions, updateMesh } from "./updateMesh";

export const getBoxInstance = (
  scene: Scene,
  name: string,
  options: MeshOptions &
    Partial<{
      width: number;
      height: number;
      depth: number;
      receiveShadows: boolean;
    }>
) => {
  const {
    width = 1,
    height = 1,
    depth = 1,
    material,
    receiveShadows = false,
  } = options;
  // return getMesh(scene, name, () => {
  const rootName = `box-instance-root-${JSON.stringify([
    width,
    height,
    depth,
    material,
    receiveShadows,
  ])}`;
  let rootMesh = scene.getMeshByName(rootName) as Mesh;
  if (isUndefined(rootMesh)) {
    rootMesh = MeshBuilder.CreateBox(rootName, { width, height, depth }, scene);
    rootMesh.receiveShadows = receiveShadows;
    rootMesh.isVisible = false;
    rootMesh.material = getMaterial(scene, material, "standard");
  }
  const mesh = rootMesh.createInstance(name);
  updateMesh(scene, mesh, options);
  return mesh;
  // });
};
