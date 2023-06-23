import { toArrayBuffer } from "./toArrayBuffer";
export const toText = async (bytes) => {
    if (typeof bytes === "string") {
        return bytes;
    }
    const arr = await toArrayBuffer(bytes);
    const decoder = new TextDecoder();
    return decoder.decode(arr);
};
//# sourceMappingURL=toText.js.map