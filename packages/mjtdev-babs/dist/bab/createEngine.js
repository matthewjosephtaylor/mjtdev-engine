import { Engine } from "babylonjs";
import { createCanvas } from "./createCanvas";
export const createEngine = (options = {
    // preserveDrawingBuffer: true,
    // stencil: true,
    // antialias: true,
    width: 320,
    height: 320,
}) => {
    const { width, height, antialias, canvas = createCanvas({ width, height }), } = options;
    const engine = new Engine(canvas, antialias, {
        powerPreference: "high-performance",
        ...options,
    });
    engine.loadingScreen = undefined;
    engine.hideLoadingUI();
    return engine;
};
//# sourceMappingURL=createEngine.js.map