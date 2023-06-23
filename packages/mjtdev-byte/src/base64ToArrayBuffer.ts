export const base64ToArrayBuffer = (input: string): ArrayBuffer => {
  // if (typeof window === "undefined") {
  //   return Buffer.from(input, "base64");
  // }
  const binaryString = atob(input);
  const result = new Uint8Array(binaryString.length);
  binaryString
    .split("")
    .map((s) => s.charCodeAt(0))
    .forEach((b, i) => {
      result[i] = b;
    });
  return result;
};
