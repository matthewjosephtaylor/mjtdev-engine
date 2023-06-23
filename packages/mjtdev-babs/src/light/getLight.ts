import { isDefined } from "@mjtdev/object";
import { Light, Scene } from "babylonjs";


export const getLight = <T extends Light>(
  scene: Scene,
  name: string,
  producer: () => T
) => {
  const light = scene.getLightByName(name);
  if (isDefined(light)) {
    return light as T;
  }
  return producer();
};
