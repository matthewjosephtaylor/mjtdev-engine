export function arrayBufferToBase64(arrayBuffer: ArrayBuffer) {
  // need to clone array buffer to avoice 'detached' error
  const uint8Array = new Uint8Array(arrayBuffer.slice(0));
  let binaryString = "";
  for (let i = 0; i < uint8Array.length; i++) {
    binaryString += String.fromCharCode(uint8Array[i]);
  }
  return btoa(binaryString);
}
