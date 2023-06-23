export const toggleInspector = (scene) => {
    if (scene.debugLayer.isVisible()) {
        scene.debugLayer.hide();
    }
    else {
        scene.debugLayer.show();
    }
};
//# sourceMappingURL=toggleInspector.js.map