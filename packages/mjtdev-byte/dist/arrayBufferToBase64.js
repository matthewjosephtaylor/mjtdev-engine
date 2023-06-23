export const arrayBufferToBase64 = (input) => {
    if (typeof window === "undefined") {
        return Buffer.from(input).toString("base64");
    }
    return btoa(new Uint8Array(input).reduce((data, byte) => data + String.fromCharCode(byte), ""));
};
//# sourceMappingURL=arrayBufferToBase64.js.map