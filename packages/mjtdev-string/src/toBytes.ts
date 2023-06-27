export const toBytes = (str: string) => {
  return new Blob([str], { type: "text/plain" });
};
