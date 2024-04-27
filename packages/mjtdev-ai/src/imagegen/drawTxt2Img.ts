import type { StableDiffusionProcessingTxt2Img } from "./api/AutomaticApi";
import { rawImageStringToImg } from "./rawImageStringToImg";
import { txt2img } from "./txt2img";

export const drawTxt2Img = async (
  canvasOrContext: HTMLCanvasElement | CanvasRenderingContext2D,
  txt2imgOptions: StableDiffusionProcessingTxt2Img = {},
  canvasOptions: Partial<{
    x: number;
    y: number;
    width: number;
    height: number;
  }> = {}
) => {
  const response = await txt2img(txt2imgOptions);
  if (!response?.images) {
    return;
  }
  const img = await rawImageStringToImg(response.images[0]);
  const canvas =
    canvasOrContext instanceof HTMLCanvasElement
      ? canvasOrContext
      : canvasOrContext.canvas;
  // const ctx = canvasOrContext.getContext("2d");
  const ctx =
    canvasOrContext instanceof CanvasRenderingContext2D
      ? canvasOrContext
      : canvas.getContext("2d");
  const {
    x = 0,
    y = 0,
    width = canvas.width,
    height = canvas.height,
  } = canvasOptions;
  if (!ctx) {
    return;
  }
  ctx.drawImage(img, x, y, width, height);
};
