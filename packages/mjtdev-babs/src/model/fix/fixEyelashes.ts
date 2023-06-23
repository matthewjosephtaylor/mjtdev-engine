import { Color3, Mesh, Scene } from "babylonjs";
import { ModelMaterial } from "../ModelBuilder";

export const fixEyelashes = (scene: Scene) => {
  scene.meshes.forEach((mesh) => {
    // console.log(m.name);
    if (mesh.name.includes("Eyelashes")) {
      // mesh.setEnabled(false); // TODO re-enable eyelashes when morphs fixed
      if (mesh.name.includes("primitive1")) {
        const material = mesh.material as ModelMaterial;
        const texture = mesh.material.getActiveTextures()[0];
        texture.hasAlpha = true;
        material.transparencyMode = 1;
        material.opacityTexture = texture;
        mesh.visibility = 0.5;
        material.albedoColor = new Color3(0, 0, 0);
      }
    }
  });
};
