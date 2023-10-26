
export const calcCenterPopup = (w: number, h: number) => {
  const { width, height } = document.body.getBoundingClientRect();
  const [cx, cy] = [width / 2, height / 2] as const;
  return {
    x: cx - w / 2,
    y: cy - h / 2,
  };
};
