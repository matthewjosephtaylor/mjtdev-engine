export const clearCanvas = (canvas) => {
    if (!canvas) {
        return;
    }
    const ctx = canvas.getContext("2d");
    if (!ctx) {
        return;
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
};
//# sourceMappingURL=clearCanvas.js.map