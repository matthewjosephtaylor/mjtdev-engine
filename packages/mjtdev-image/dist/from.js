import ImageJs from "image-js";
import { loadHTMLImageElement } from "./loadHTMLImageElement";
import { toHTMLCanvasElement } from "./toHTMLCanvasElement";
import { times } from "@mjtdev/object";
// @ts-ignore Fucking Buffer
// globalThis["Buffer"] = { isBuffer: () => false };
export const from = async (src) => {
    const canvas = await toHTMLCanvasElement(src);
    let ijs = ImageJs.fromCanvas(canvas);
    const builder = {
        update: (updater) => {
            ijs = updater(ijs);
            return builder;
        },
        toDataURL: () => {
            return ijs.toDataURL();
        },
        toBlob: () => {
            return ijs.toBlob();
        },
        get: (getter) => {
            return getter(ijs);
        },
        toHtmlImageElement: () => {
            return loadHTMLImageElement(ijs.toDataURL());
        },
        mapPixels: (mapper) => {
            const { width, height } = ijs;
            return times(width * height, (i) => {
                return mapper(ijs.getPixel(i));
            });
        },
    };
    return builder;
};
//# sourceMappingURL=from.js.map