import type { Scene } from "@babylonjs/core";

export const toggleInspector = (scene: Scene) => {
  if (scene.debugLayer.isVisible()) {
    scene.debugLayer.hide();
  } else {
    scene.debugLayer.show();
  }
};
