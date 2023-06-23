import { Scene } from "babylonjs";


export const toggleInspector = (scene: Scene) => {
  if (scene.debugLayer.isVisible()) {
    scene.debugLayer.hide();
  } else {
    scene.debugLayer.show();
  }
};
