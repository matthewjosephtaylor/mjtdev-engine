// import ImageJs from "image-js";
import { loadHTMLImageElement } from "./loadHTMLImageElement";
import { toHTMLCanvasElement } from "./toHTMLCanvasElement";
export const toHTMLImageElement = async (src) => {
    if (src instanceof HTMLImageElement) {
        return src;
    }
    if (typeof src === "string") {
        return loadHTMLImageElement(src);
    }
    if (src instanceof HTMLCanvasElement) {
        return loadHTMLImageElement(src.toDataURL());
    }
    if (src instanceof HTMLVideoElement) {
        return toHTMLImageElement(await toHTMLCanvasElement(src));
    }
    return new Promise(async (resolve, reject) => {
        try {
            // const arrayBuffer = await Bytes.toArrayBuffer(src);
            // const ijs = await ImageJs.load(arrayBuffer);
            // resolve(loadHTMLImageElement(ijs.toDataURL()));
            reject("TODO convert to array buffer and then load as data url");
        }
        catch (reason) {
            reject(reason);
        }
    });
};
//# sourceMappingURL=toHTMLImageElement.js.map