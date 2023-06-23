import { isDefined } from "@mjtdev/object";
import { GlowLayer } from "babylonjs";
export const getGlowLayer = (scene, name, options) => {
    // workaround Bug in getGlowlayerbyName
    const layerMaybe = scene?.effectLayers?.length
        ? scene.getGlowLayerByName(name)
        : undefined;
    if (isDefined(layerMaybe)) {
        return layerMaybe;
    }
    return new GlowLayer(name, scene, options);
};
//# sourceMappingURL=getGlowLayer.js.map