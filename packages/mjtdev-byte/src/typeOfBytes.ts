export const typeOfBytes = (bytes: unknown) => {
  if (bytes instanceof Blob) {
    return "Blob";
  }
  if (bytes instanceof ArrayBuffer) {
    return "ArrayBuffer";
  }
  if (typeof bytes === "string") {
    return "string";
  }
  if (ArrayBuffer.isView(bytes)) {
    return "ArrayBufferView";
  }
  if (Array.isArray(bytes)) {
    return "Array";
  }
};
