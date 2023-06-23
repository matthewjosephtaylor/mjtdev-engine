export const arrayBufferToHex = (input: ArrayBuffer) => {
  const inputUint8Array = new Uint8Array(input);
  const output = [];
  for (let i = 0; i < inputUint8Array.length; ++i) {
    output.push(inputUint8Array[i].toString(16).padStart(2, "0"));
  }
  return output.join("");
};
