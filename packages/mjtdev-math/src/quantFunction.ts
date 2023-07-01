export const quant = ({
  v,
  q,
  s = 0,
}: {
  v: number;
  q: number;
  s?: number;
}) => {
  return Number(((v * q) / q).toFixed(s));
};
