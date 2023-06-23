import { Mesh, Tags } from "babylonjs";
import { Colors } from "@mjtdev/color";
import { Arrays } from "@mjtdev/object";
import { toVec3 } from "@mjtdev/math";
import { groupMeshesByMaterial } from "./groupMeshesByMaterial";
import { getBox } from "../mesh/getBox";
import { getMaterial } from "../material/getMaterial";
import { mergeMeshes } from "../mesh/mergeMeshes";
import { toOrderedString } from "../util/toOrderedString";
export const voxDataToMergedModel = (scene, voxData, name) => {
    const { XYZI, RGBA } = voxData;
    const colors = RGBA.map((rgba) => {
        const { r, g, b, a } = rgba;
        return Colors.builder({ color: [r, g, b, a], model: "rgba" }).toString();
    });
    // console.log(`${name} voxels: ${XYZI.length} colors: ${colors.length}`);
    // const parent = new Mesh(name, scene);
    // const centeringNode = new Mesh(`centering-${name}`);
    const voxels = XYZI.map((xyzi, index) => {
        const color = colors[xyzi.i];
        const [x, y, z] = toVec3(xyzi);
        const mesh = getBox(scene, `voxel-merged-${color}-${toOrderedString(xyzi)}`, {
            position: [x, y, z],
            // color,
            // material: `voxel-merged-material-${color}`,
            material: "voxel-material",
            colors: Arrays.from(6).map(() => color),
        });
        mesh.setEnabled(false);
        return mesh;
    });
    const grouped = groupMeshesByMaterial(voxels);
    const subMerged = Object.values(grouped).map((group) => mergeMeshes(group));
    const merged = new Mesh(`merged-${name}`, scene);
    subMerged.forEach((m) => (m.parent = merged));
    const material = getMaterial(scene, "voxel-material", "standard");
    subMerged.forEach((m) => (m.material = material));
    // voxels.forEach((v) => v.setParent(merged));
    merged.metadata = {
        voxels: voxels,
    };
    // const merged = mergeMeshes(meshes, {
    //   // multiMultiMaterials: true,
    //   disposeSource: true,
    // });
    // merged.name = name;
    // merged.refreshBoundingInfo();
    // const center = merged.getBoundingInfo().boundingBox.center;
    // merged.dispose();
    // centeringNode.position = centeringNode.position.subtract(center);
    // centeringNode.parent = parent;
    // return parent;
    Tags.AddTagsTo(merged, "merged");
    // const model = new TransformNode(name);
    const model = new Mesh(name, scene);
    model.metadata = {
        voxels: voxels,
    };
    merged.parent = model;
    // merged.refreshBoundingInfo();
    // const mergedCenter = merged.getBoundingInfo().boundingSphere.center;
    // merged.position = v3(0,0,-30);
    return model;
};
//# sourceMappingURL=voxDataToMergedModel.js.map