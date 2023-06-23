import { fixEyelashes } from "./fixEyelashes";
import { fixEyes } from "./fixEyes";
export const fixDazFigure = (scene) => {
    fixEyelashes(scene);
    scene.meshes.map(fixEyes);
};
//# sourceMappingURL=fixDazFigure.js.map