import { Scene, UniversalCamera } from "babylonjs";
import { v3 } from "../bab/v3";
import { ArcRotateCameraOptions, UniversalCameraOptions } from "./Cameras";
import { getCamera } from "./getCamera";
import { updateCamera } from "./updateCamera";

export const getUniversalCamera = (
  scene: Scene,
  name: string,
  options: UniversalCameraOptions = {}
) => {
  const camera = getCamera(scene, name, () => {
    const { position } = options;
    return new UniversalCamera(name, v3(position), scene);
  });
  updateCamera(camera, options);
  return camera;
};
