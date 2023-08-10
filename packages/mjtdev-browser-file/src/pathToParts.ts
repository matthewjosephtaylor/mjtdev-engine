export const pathToParts = (path: string) => {
  return path.split(/\\|\//).filter((p) => p !== "");
};
