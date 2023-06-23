import { isDefined } from "@mjtdev/object";
import { GlowLayer, IGlowLayerOptions, Scene } from "babylonjs";

export const getGlowLayer = (
  scene: Scene,
  name: string,
  options?: IGlowLayerOptions
) => {
  // workaround Bug in getGlowlayerbyName
  const layerMaybe = scene?.effectLayers?.length
    ? scene.getGlowLayerByName(name)
    : undefined;
  if (isDefined(layerMaybe)) {
    return layerMaybe;
  }
  return new GlowLayer(name, scene, options);
};
