import { StableDiffusionProcessingTxt2Img } from "./api/AutomaticApi";
import { rawImageStringToImg } from "./rawImageStringToImg";
import { txt2img } from "./txt2img";


export const drawTxt2Img = async (
  canvas: HTMLCanvasElement,
  txt2imgOptions: StableDiffusionProcessingTxt2Img = {},
  canvasOptions: Partial<{
    x: number;
    y: number;
    width: number;
    height: number;
  }> = {}
) => {
  const response = await txt2img(txt2imgOptions);
  const img = await rawImageStringToImg(response.images[0]);
  console.log({ img });
  const ctx = canvas.getContext("2d");
  const {
    x = 0, y = 0, width = canvas.width, height = canvas.height,
  } = canvasOptions;
  ctx.drawImage(img, x, y, width, height);
};
