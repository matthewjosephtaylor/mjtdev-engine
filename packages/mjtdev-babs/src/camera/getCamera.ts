import { isDefined } from "@mjtdev/object";
import { Camera, Scene } from "babylonjs";


export const getCamera = <T extends Camera>(
  scene: Scene,
  name: string,
  producer: () => T
) => {
  const camera = scene.getCameraByName(name);
  if (isDefined(camera)) {
    return camera as T;
  }
  return producer();
};
