import { iff } from "@mjtdev/object";
import { HemisphericLight, Light, PointLight, Scene } from "babylonjs";
import { v3 } from "../bab/v3";
import { AllLightOptions } from "./Lights";

export const updateLight = (light: Light, options: AllLightOptions) => {
  const { intensity, direction, position } = options;
  iff(intensity, () => {
    light.intensity = intensity;
  });

  if (light instanceof HemisphericLight) {
    iff(direction, () => {
      light.direction = v3(direction);
    });
  }

  if (light instanceof PointLight) {
    iff(position, () => {
      light.position = v3(position);
    });
  }
};
