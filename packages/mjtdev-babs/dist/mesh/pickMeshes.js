export const pickMeshes = (scene, x, y, options = {}) => {
    const { predicate = (mesh) => mesh.isPickable, camera = scene.activeCamera, } = options;
    return scene.multiPick(x, y, predicate, camera);
};
//# sourceMappingURL=pickMeshes.js.map