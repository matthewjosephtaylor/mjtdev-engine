import { isUndefined } from "@mjtdev/object";
export const destroyMesh = (scene, name, options = {}) => {
    const { recurse = true, disposeMaterials = false, disposeTextures = false, } = options;
    const mesh = scene.getMeshByName(name);
    if (isUndefined(mesh)) {
        return;
    }
    mesh.dispose(!recurse, false);
    if (disposeMaterials) {
        const material = mesh.material;
        material.name = `DISPOSED-${material.name}`;
        material?.dispose(true, disposeTextures);
        scene.removeMaterial(material);
    }
    scene.removeMesh(mesh);
};
//# sourceMappingURL=destroyMesh.js.map