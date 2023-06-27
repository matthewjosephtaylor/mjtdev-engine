export const toHex = (num: number): string => {
  return ("0000000" + (num >>> 0).toString(16)).substr(-8);
};
