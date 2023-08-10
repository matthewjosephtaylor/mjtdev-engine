import { nextTraceId } from "../common/nextTraceId";
import { StableDiffusionProcessingTxt2Img } from "./api/AutomaticApi";
import { safeApi } from "./safeApi";
import { useImageGenState } from "./useImageGenState";

export const img2img = async (
  src: HTMLCanvasElement,
  mask: HTMLCanvasElement,
  options: StableDiffusionProcessingTxt2Img &
    Partial<{
      signal: AbortSignal;
      outpainting_fill: 0 | 1 | 2 | 3;
      inpainting_fill: 0 | 1 | 2 | 3;
    }>
) => {
  const traceId = nextTraceId();
  return safeApi(async (api) => {
    const initImg = src.toDataURL("image/png");

    const maskImg = mask.toDataURL("image/png");

    const { monitor } = useImageGenState.getState();
    monitor(options?.prompt, "CALL", traceId);

    const response = await api.sdapi.img2ImgapiSdapiV1Img2ImgPost(
      {
        init_images: [initImg],
        mask: maskImg,
        // 0 = blank (the mask itself?)
        // 1 = orig image
        // 2 = noise
        // 3 = empty
        // inpainting_fill: 1,

        steps: 5,
        cfg_scale: 3,
        ...options,
        // denoising_strength: 0.2
      },
      {
        signal: options?.signal,
      }
    );
    if (!response.ok) {
      monitor(String(response.error), "ERROR", traceId);
      console.log("ERROR");
      console.log({ options });
      console.log(response.error);
      return undefined;
    }

    monitor(response.data.info, "RESPONSE", traceId);
    return response.data;
  });
};
