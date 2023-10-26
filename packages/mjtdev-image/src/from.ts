import { ImageLike } from "./ImageLike";
// import ImageJs from "image-js";
import { loadHTMLImageElement } from "./loadHTMLImageElement";
import { toHTMLCanvasElement } from "./toHTMLCanvasElement";
import { times } from "@mjtdev/object";

export const imageHelper = (canvas: HTMLCanvasElement) => {
  return {
    width: canvas.width,
    height: canvas.height,

    toDataURL: () => {
      return canvas.toDataURL();
    },
    toBlob: () => {
      return new Promise((resolve, reject) => {
        try {
          canvas.toBlob((blob) => {
            return resolve(blob);
          });
        } catch (error) {
          return reject(error);
        }
      });
    },
    // getPixel: (i: number) => {
    //   canvas.
    //   return [];
    // },
  };
};

export type ImageJs = ReturnType<typeof imageHelper>;

export const from = async (src: ImageLike) => {
  const canvas = await toHTMLCanvasElement(src);
  // let ijs = ImageJs.fromCanvas(canvas);
  let ijs = imageHelper(canvas);

  const builder = {
    // update: (updater: (img: ImageJs) => ImageJs) => {
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
      throw new Error("Not image-js support removed. TODO re-implement");
      // const { width, height } = ijs;
      // const ctx = canvas.getContext('2d')
      // const imageData = ctx.getImageData(0, 0, width, height)
      // const { data} = imageData
      //   const value = new Array(this.channels);
      // return times(width * height, (i) => {
      //   const target = index * this.channels;
      //   for (let i = 0; i < this.channels; i++) {
      //     value[i] = this.data[target + i];
      //   }
      //   return value;
      //   // data.map(callbackfn)
      //   const foo = data[i]
      //   return mapper(ijs.getPixel(i));
      // });
    },
  };
  return builder;
};
