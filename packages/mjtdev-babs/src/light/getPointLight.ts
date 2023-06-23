import { PointLight, Scene } from "babylonjs";
import { v3 } from "../bab/v3";
import { PointLightOptions } from "./Lights";
import { getLight } from "./getLight";
import { updateLight } from "./updateLight";

export const getPointLight = (
  scene: Scene,
  name: string,
  options: PointLightOptions = {}
) => {
  const light = getLight(scene, name, () => {
    const { position } = options;
    return new PointLight(name, v3(position), scene);
  });
  updateLight(light, options);
};
