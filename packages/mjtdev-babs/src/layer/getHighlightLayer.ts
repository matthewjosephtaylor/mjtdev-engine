import { isDefined } from "@mjtdev/object";
import { HighlightLayer, IHighlightLayerOptions, Scene } from "babylonjs";

export const getHighlightLayer = <T extends HighlightLayer>(
  scene: Scene,
  name: string,
  options?: IHighlightLayerOptions
) => {
  const layerMaybe = scene.getHighlightLayerByName(name);
  if (isDefined(layerMaybe)) {
    return layerMaybe;
  }
  return new HighlightLayer(name, scene, options);
};
