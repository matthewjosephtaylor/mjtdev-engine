import {
  Color4,
  GlowLayer,
  IGlowLayerOptions,
  Scene,
  Constants,
} from "babylonjs";

export const addGlowLayer = (
  scene: Scene,
  name: string,
  options: Partial<IGlowLayerOptions> = {}
) => {
  const gl = new GlowLayer(name, scene, options);
  gl.neutralColor = new Color4(0, 0, 0, 0);
  return gl;
};

export const Specials = {
  addGlowLayer,
  Constants,
};
