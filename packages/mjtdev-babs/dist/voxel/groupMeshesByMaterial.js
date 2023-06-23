export const groupMeshesByMaterial = (meshes) => {
    const result = {};
    meshes.forEach((mesh) => {
        const materialName = mesh.material.name;
        const meshes = result[materialName] ?? [];
        meshes.push(mesh);
        result[materialName] = meshes;
    });
    return result;
};
//# sourceMappingURL=groupMeshesByMaterial.js.map