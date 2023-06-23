export const loadHTMLImageElement = (src) => {
    const img = document.createElement("img");
    return new Promise((resolve, reject) => {
        img.onload = () => {
            resolve(img);
        };
        img.onerror = (reason) => {
            reject(reason);
        };
        img.src = src;
    });
};
//# sourceMappingURL=loadHTMLImageElement.js.map