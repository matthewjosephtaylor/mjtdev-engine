import { toHTMLCanvasElement } from "./toHTMLCanvasElement";
export const toBlob = async (src, type, quality) => {
    const canvas = await toHTMLCanvasElement(src);
    return new Promise((resolve, reject) => {
        try {
            canvas.toBlob((blob) => {
                resolve(blob);
            }, type, quality);
        }
        catch (error) {
            reject(error);
        }
    });
};
//# sourceMappingURL=toBlob.js.map