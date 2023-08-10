import { nextTraceId } from "../common/nextTraceId";
import { safeApi } from "./safeApi";
import { useImageGenState } from "./useImageGenState";
export const img2img = async (src, mask, options) => {
    const traceId = nextTraceId();
    return safeApi(async (api) => {
        const initImg = src.toDataURL("image/png");
        const maskImg = mask.toDataURL("image/png");
        const { monitor } = useImageGenState.getState();
        monitor(options?.prompt, "CALL", traceId);
        const response = await api.sdapi.img2ImgapiSdapiV1Img2ImgPost({
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
        }, {
            signal: options?.signal,
        });
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
//# sourceMappingURL=img2img.js.map