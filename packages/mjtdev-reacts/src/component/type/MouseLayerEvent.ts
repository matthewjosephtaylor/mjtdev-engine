/**
 * @see https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/layerX
 */
type MouseLayerEvent = {
  layerX: number;
  layerY: number;
};
export const isMouseLayerEvent = (maybe: unknown): maybe is MouseLayerEvent => {
  return (
    // @ts-ignore
    typeof maybe["layerX"] === "number" && typeof maybe["layerY"] === "number"
  );
};
