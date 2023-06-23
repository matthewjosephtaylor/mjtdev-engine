import { isDefined } from "@mjtdev/object";
import { InstancedMesh, Mesh, Scene } from "babylonjs";

export const getMesh = <T extends Mesh | InstancedMesh>(
  scene: Scene,
  name: string,
  producer: (instance?: T) => T = () => undefined,
  updatable: boolean = false
): T => {
  const meshMaybe = scene.getMeshByName(name);
  if (isDefined(meshMaybe) && !updatable) {
    return meshMaybe as T;
  }
  if (isDefined(meshMaybe) && updatable) {
    return producer(meshMaybe as T) as T;
  }
  return producer();
};
