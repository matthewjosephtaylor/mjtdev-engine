import { MeshBuilder } from "babylonjs";
import { c4 } from "../bab/c4";
import { v3 } from "../bab/v3";
import { getMesh } from "./getMesh";
import { updateMesh } from "./updateMesh";
export const getLine = (scene, name, options) => {
    const { colors = [], points = [], color = "white", updatable = false, useVertexAlpha, } = options;
    return getMesh(scene, name, (instance) => {
        const pointColors = points
            .map((_, index) => colors[index] ?? color)
            .map((c) => c4(c));
        const mesh = MeshBuilder.CreateLines(name, {
            points: points.map((p) => v3(p)),
            colors: pointColors,
            updatable,
            useVertexAlpha,
            instance,
        });
        updateMesh(scene, mesh, options);
        return mesh;
    }, updatable);
};
//# sourceMappingURL=getLine.js.map