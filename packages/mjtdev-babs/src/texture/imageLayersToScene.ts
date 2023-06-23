import { Engine, Scene } from "babylonjs";
import { layerToPlane } from "./layerToPlane";
import { TextureLayer } from "./TextureLayer";

export const imageLayersToScene = async (
  layers: TextureLayer[],
  engine: Engine,
) => {
  const scene = new Scene(engine);
  const planes = await Promise.all(
    layers.map(async (image, index) => {
      const plane = await layerToPlane(image, scene );
      plane.position.set(0, 0, -index);
      return plane;
    })
  );
  return scene;
};
