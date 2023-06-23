import { Asserts } from "@mjtdev/assert";
import { Mesh, Scene } from "babylonjs";
import { getMesh } from "./getMesh";

export const getMeshInstance = <T extends Mesh>(
  scene: Scene,
  name: string,
  rootName: string,
  producer: () => T = () => undefined
) => {
  return getMesh(scene, name, () => {
    const rootMesh = getMesh(scene, rootName, producer);
    Asserts.assertValue(rootMesh, () => {
      console.log({ scene, name, rootName, producer });
      return "Unable to create mesh instance. Missing root mesh.";
    });
    return rootMesh.createInstance(name);
  });
};
