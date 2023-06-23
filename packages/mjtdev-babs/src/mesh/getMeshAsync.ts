import { InstancedMesh, Mesh, Scene } from "babylonjs";
import { isDefined } from "@mjtdev/object";


export const getMeshAsync = <T extends Mesh | InstancedMesh>(
  scene: Scene,
  name: string,
  producer: () => Promise<T> = () => undefined
): Promise<T> => {
  const meshMaybe = scene.getMeshByName(name);
  if (isDefined(meshMaybe)) {
    return Promise.resolve(meshMaybe) as Promise<T>;
  }
  return producer();
};
