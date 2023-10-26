export const toSrcString = (imageLike) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (typeof imageLike === "string") {
                resolve(imageLike);
                return;
            }
            if (imageLike instanceof HTMLImageElement) {
                resolve(imageLike.src);
                return;
            }
            if (imageLike instanceof HTMLVideoElement) {
                resolve(imageLike.src);
                return;
            }
            if (imageLike instanceof HTMLCanvasElement) {
                resolve(imageLike.toDataURL());
                return;
            }
            reject("Unable to determine src URL");
            // const arrayBuffer = await Bytes.toArrayBuffer(imageLike);
            // const ijs = await ImageJs.load(arrayBuffer);
            // resolve(ijs.toDataURL());
        }
        catch (reason) {
            reject(reason);
        }
    });
};
//# sourceMappingURL=toSrcString.js.map