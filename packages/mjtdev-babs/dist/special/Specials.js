import { Color4, GlowLayer, Constants, } from "babylonjs";
export const addGlowLayer = (scene, name, options = {}) => {
    const gl = new GlowLayer(name, scene, options);
    gl.neutralColor = new Color4(0, 0, 0, 0);
    return gl;
};
export const Specials = {
    addGlowLayer,
    Constants,
};
//# sourceMappingURL=Specials.js.map