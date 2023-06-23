import { InstancedMesh, Mesh, ShadowGenerator } from "babylonjs";
import { removeShadowFromMesh } from "../mesh/removeShadowFromMesh";

export const addShadowToMesh = (mesh: Mesh | InstancedMesh) => {
  const scene = mesh.getScene();
  const shadowCasters = scene.getLightsByTags("shadowCaster");
  shadowCasters.forEach((caster) => {
    const shadowGenerator = caster.metadata[
      "shadowGenerator"
    ] as ShadowGenerator;
    shadowGenerator.addShadowCaster(mesh);
  });
  return () => {
    removeShadowFromMesh(mesh);
  };
};


