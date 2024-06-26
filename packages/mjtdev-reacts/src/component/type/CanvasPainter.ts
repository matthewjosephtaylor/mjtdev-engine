export type CanvasPainter = (
  canvas: HTMLCanvasElement
) => Promise<() => void> | undefined | (() => void) | void;
