export const assignMediaTypeToBlob = <MT extends string>(
  blob: Blob,
  mediaType: MT
): Blob & { type: MT } => {
  return blob.slice(0, blob.size, mediaType) as Blob & { type: MT };
};
