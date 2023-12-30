import { toBlob } from "./toBlob";
export const toDataUrl = async (bytes) => {
    const blob = toBlob(bytes);
    const reader = new FileReader();
    return new Promise((resolve, reject) => {
        const callback = (result) => {
            if (typeof result === "string") {
                return resolve(result);
            }
            console.log({ bytes });
            return reject("Unable to convert to data URL");
        };
        reader.onload = function (e) {
            callback(e.target?.result);
        };
        reader.readAsDataURL(blob);
    });
};
//# sourceMappingURL=toDataUrl.js.map