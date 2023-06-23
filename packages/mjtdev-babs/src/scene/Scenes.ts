import { Engine, Scene } from "babylonjs";
import { toggleInspector } from "./toggleInspector";

export const createScene = (engine: Engine) => {
  return new Scene(engine);
};

export const Scenes = {
  createScene,
  toggleInspector,
};
