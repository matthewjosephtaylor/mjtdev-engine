import { Asserts } from "@mjtdev/assert";
import { Mesh, Scene } from "babylonjs";
import { getMeshAsync } from "./getMeshAsync";

export const getMeshInstanceAsync = async <T extends Mesh>(
  scene: Scene,
  name: string,
  rootName: string,
  producer: () => Promise<T> = () => undefined
) => {
  return getMeshAsync(scene, name, async () => {
    const rootMesh = await getMeshAsync(scene, rootName, producer);
    Asserts.assertValue(rootMesh, () => {
      console.log({ scene, name, rootName, producer });
      return "Unable to create mesh instance. Missing root mesh.";
    });
    return rootMesh.createInstance(name);
  });
};
