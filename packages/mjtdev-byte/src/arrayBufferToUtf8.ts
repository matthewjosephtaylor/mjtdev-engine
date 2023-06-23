export const arrayBufferToUtf8 = (input: ArrayBuffer) => new TextDecoder().decode(new Uint8Array(input));
