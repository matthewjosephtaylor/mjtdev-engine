import { nextTraceId } from "../common/nextTraceId";
import type {
  StableDiffusionProcessingTxt2Img,
  TextToImageResponse,
} from "./api/AutomaticApi";
import { safeApi } from "./safeApi";
import { useImageGenState } from "./useImageGenState";

export const txt2img = async (
  options: StableDiffusionProcessingTxt2Img & Partial<{ signal: AbortSignal }>
): Promise<TextToImageResponse | undefined> => {
  const { debug, monitor } = useImageGenState.getState();
  const traceId = nextTraceId();
  return safeApi(async (api) => {
    monitor(options?.prompt ?? "", "CALL", traceId);
    const response = await api.sdapi.text2ImgapiSdapiV1Txt2ImgPost(
      {
        steps: 5,
        ...options,
      },
      {
        signal: options?.signal,
      }
    );
    if (debug) {
      console.log(options.prompt);
    }

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
