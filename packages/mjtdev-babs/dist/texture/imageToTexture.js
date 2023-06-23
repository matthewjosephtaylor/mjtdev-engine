import { DynamicTexture, Texture } from "babylonjs";
import { imageSrcToUrl } from "../util/imageSrcToUrl";
export const imageToTexture = async (scene, name, image) => {
    if (image instanceof HTMLCanvasElement) {
        return new Promise(async (resolve, reject) => {
            try {
                const texture = new DynamicTexture(name, image, scene);
                texture.update();
                texture.hasAlpha = true;
                resolve(texture);
            }
            catch (reason) {
                reject(reason);
            }
        });
    }
    const url = await imageSrcToUrl(image);
    return new Promise((resolve, reject) => {
        try {
            const texture = new Texture(url, scene, false, true);
            texture.hasAlpha = true;
            texture.onLoadObservable.addOnce(() => {
                resolve(texture);
            });
        }
        catch (reason) {
            reject(reason);
        }
    });
};
//# sourceMappingURL=imageToTexture.js.map