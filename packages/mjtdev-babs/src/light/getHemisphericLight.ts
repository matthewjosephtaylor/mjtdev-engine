import { HemisphericLight, Scene } from "babylonjs";
import { v3 } from "../bab/v3";
import { HemisphericLightOptions } from "./Lights";
import { getLight } from "./getLight";
import { updateLight } from "./updateLight";

export const getHemisphericLight = (
  scene: Scene,
  name: string,
  options: HemisphericLightOptions = {}
) => {
  const light = getLight(scene, name, () => {
    const { direction } = options;
    return new HemisphericLight(name, v3(direction), scene);
  });
  updateLight(light, options);
  return light;
};
