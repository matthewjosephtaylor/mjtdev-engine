import { safeApi } from "./safeApi";
export const txt2img = async (options) => {
    return safeApi(async (api) => {
        console.log(`txt2img....`);
        console.log(options);
        const response = await api.sdapi.text2ImgapiSdapiV1Txt2ImgPost({
            steps: 5,
            ...options,
        });
        console.log(`finished txt2img.`);
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
//# sourceMappingURL=txt2img.js.map