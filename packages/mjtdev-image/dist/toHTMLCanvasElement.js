import { toHTMLImageElement } from "./toHTMLImageElement";
export const toHTMLCanvasElement = async (src) => {
    if (src instanceof HTMLCanvasElement) {
        return src;
    }
    const image = await toHTMLImageElement(src);
    const canvas = document.createElement("canvas");
    canvas.width = image.naturalWidth;
    canvas.height = image.naturalHeight;
    canvas.getContext("2d").drawImage(image, 0, 0);
    return canvas;
};
//# sourceMappingURL=toHTMLCanvasElement.js.map