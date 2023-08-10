export const baseMediaTypeOf = (mediaType: string): string | undefined => {
  if (mediaType === undefined) {
    return undefined;
  }
  return mediaType.split("/")[0];
};
