import { Scene } from "babylonjs";
import { fixEyelashes } from "./fixEyelashes";
import { fixEyes } from "./fixEyes";


export const fixDazFigure = (scene: Scene) => {
  fixEyelashes(scene);
  scene.meshes.map(fixEyes);
};
