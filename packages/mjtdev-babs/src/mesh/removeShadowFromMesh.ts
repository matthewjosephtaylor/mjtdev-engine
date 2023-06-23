import { AbstractMesh, Mesh, ShadowGenerator } from "babylonjs";

export const removeShadowFromMesh = (mesh: Mesh | AbstractMesh) => {
  const scene = mesh.getScene();
  mesh.dispose();
  const shadowCasters = scene.getLightsByTags("shadowCaster");
  shadowCasters.forEach((caster) => {
    const shadowGenerator = caster.metadata[
      "shadowGenerator"
    ] as ShadowGenerator;
    shadowGenerator.removeShadowCaster(mesh);
  });
};
