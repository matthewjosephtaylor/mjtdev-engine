import { MeshBuilder, StandardMaterial } from "babylonjs";
import { isDefined } from "@mjtdev/object";
import { c3 } from "../bab/c3";
import { imageToTexture } from "./imageToTexture";
import { Randoms } from "@mjtdev/random";
export const hasValidId = (obj) => {
    if (typeof obj === "string") {
        return true;
    }
    return isDefined(obj.id) && String(obj.id).startsWith("id-");
};
export const idOfImageSrc = (src) => {
    if (typeof src === "string") {
        return src;
    }
    if ("id" in src) {
        return src.id;
    }
    return undefined;
};
export const layerToPlane = async (layer, scene) => {
    const id = Randoms.randomUuid();
    const { size, image, color } = layer;
    const plane = MeshBuilder.CreatePlane(`plane-${id}`, {
        width: size,
        height: size,
    }, scene);
    const material = new StandardMaterial(`material-${id}`, scene);
    if (isDefined(image)) {
        const texture = await imageToTexture(scene, `layer-${id}`, image);
        layer._texture = texture;
        layer._mesh = plane;
        layer._material = material;
        texture.hasAlpha = true;
        material.opacityTexture = texture;
        material.emissiveTexture = texture;
    }
    if (isDefined(color)) {
        material.emissiveColor = c3(color);
    }
    plane.material = material;
    return plane;
};
//# sourceMappingURL=layerToPlane.js.map