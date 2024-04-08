export const base64ToArrayBuffer = (input) => {
    // Decode base64 string to a binary string.
    const binaryString = globalThis.atob(input);
    // Create a new ArrayBuffer with the same length as the binary string.
    const length = binaryString.length;
    const bytes = new Uint8Array(length);
    // Iterate over each character in the binary string and fill the Uint8Array.
    for (let i = 0; i < length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }
    // The Uint8Array is backed by the ArrayBuffer, which we return.
    return bytes.buffer;
};
//# sourceMappingURL=base64ToArrayBuffer.js.map