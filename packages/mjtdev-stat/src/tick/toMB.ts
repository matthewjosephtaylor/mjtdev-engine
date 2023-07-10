export const MB = 1024 * 1024;
export const toMB = (b: number) => {
  return (b / MB).toFixed(0) + "mb";
};
