export const isMouseLayerEvent = (maybe) => {
    return (
    // @ts-ignore
    typeof maybe["layerX"] === "number" && typeof maybe["layerY"] === "number");
};
//# sourceMappingURL=MouseLayerEvent.js.map