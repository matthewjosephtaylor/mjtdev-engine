import { toArrayBuffer } from "./toArrayBuffer";
// @see https://stackoverflow.com/questions/40031688/javascript-arraybuffer-to-hex
export const encodeAsString = async (bytes, radix = 16) => {
    const arr = await toArrayBuffer(bytes);
    return [...new Uint8Array(arr)]
        .map((x) => x.toString(radix).padStart(2, "0"))
        .join("");
};
//# sourceMappingURL=encodeAsString.js.map