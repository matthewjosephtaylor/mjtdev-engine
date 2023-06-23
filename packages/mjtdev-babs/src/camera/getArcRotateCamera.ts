import { ArcRotateCamera, Scene } from "babylonjs";
import { v3 } from "../bab/v3";
import { ArcRotateCameraOptions } from "./Cameras";
import { getCamera } from "./getCamera";
import { updateCamera } from "./updateCamera";

export const getArcRotateCamera = (
  scene: Scene,
  name: string,
  options: ArcRotateCameraOptions = {}
) => {
  const camera = getCamera(scene, name, () => {
    const { alpha = 0, beta = 0, radius = 2, target } = options;
    return new ArcRotateCamera(name, alpha, beta, radius, v3(target), scene);
  });
  updateCamera(camera, options);
  return camera;
};
