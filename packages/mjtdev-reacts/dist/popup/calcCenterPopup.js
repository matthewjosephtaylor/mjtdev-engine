export const calcCenterPopup = (w, h) => {
    const { width, height } = document.body.getBoundingClientRect();
    const [cx, cy] = [width / 2, height / 2];
    return {
        x: cx - w / 2,
        y: cy - h / 2,
    };
};
//# sourceMappingURL=calcCenterPopup.js.map