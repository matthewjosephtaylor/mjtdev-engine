import { ArcRotateCamera, Camera, Scene } from "babylonjs";
import { v3 } from "../bab/v3";

export const createDebugCamera = (
  scene: Scene,
  name: string,
  {}: Partial<{}> = {}
) => {
  scene?.activeCamera?.dispose();
  const canvas = scene.getEngine().getRenderingCanvas();
  const alpha = -Math.PI / 2;
  const beta = Math.PI / 2.5;
  const camera = new ArcRotateCamera(name, alpha, beta, 15, v3(0, 0, 0), scene);
  camera.attachControl(canvas, true);
  camera.mode = Camera.PERSPECTIVE_CAMERA;
};
