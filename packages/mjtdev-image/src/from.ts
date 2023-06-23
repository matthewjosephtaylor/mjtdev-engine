import { ImageLike } from "./ImageLike";
import ImageJs from "image-js";
import { loadHTMLImageElement } from "./loadHTMLImageElement";
import { toHTMLCanvasElement } from "./toHTMLCanvasElement";
import { times } from "@mjtdev/object";

// @ts-ignore Fucking Buffer
// globalThis["Buffer"] = { isBuffer: () => false };
export const from = async (src: ImageLike) => {
  const canvas = await toHTMLCanvasElement(src);
  let ijs = ImageJs.fromCanvas(canvas);
  const builder = {
    update: (updater: (img: ImageJs) => ImageJs) => {
      ijs = updater(ijs);
      return builder;
    },

    toDataURL: () => {
      return ijs.toDataURL();
    },
    toBlob: () => {
      return ijs.toBlob();
    },
    get: <T>(getter: (img: ImageJs) => T) => {
      return getter(ijs);
    },

    toHtmlImageElement: () => {
      return loadHTMLImageElement(ijs.toDataURL());
    },

    mapPixels: <T>(mapper: (pixel: number[]) => T): T[] => {
      const { width, height } = ijs;
      return times(width * height, (i) => {
        return mapper(ijs.getPixel(i));
      });
    },
  };
  return builder;
};
