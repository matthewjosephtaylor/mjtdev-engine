import { safeApi } from "./safeApi";
export const img2img = async (src, mask, options) => {
    return safeApi(async (api) => {
        const initImg = src.toDataURL("image/png");
        const maskImg = mask.toDataURL("image/png");
        console.log(`img2img....`);
        console.log(options);
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
        });
        console.log(`finished img2img.`);
        console.log(response);
        if (!response.ok) {
            console.log("ERROR");
            console.log({ options });
            console.log(response.error);
            return undefined;
        }
        return response.data;
    });
};
//# sourceMappingURL=img2img.js.map