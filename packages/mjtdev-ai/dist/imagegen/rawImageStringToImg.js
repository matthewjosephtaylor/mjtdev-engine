import { prependPngType } from "./prependPngType";
export const rawImageStringToImg = (data) => {
    const imgUrl = prependPngType(data);
    const img = document.createElement("img");
    img.src = imgUrl;
    return new Promise((resolve, reject) => {
        img.addEventListener("load", () => {
            resolve(img);
        });
        img.addEventListener("error", (err) => {
            reject(err);
        });
    });
};
//# sourceMappingURL=rawImageStringToImg.js.map