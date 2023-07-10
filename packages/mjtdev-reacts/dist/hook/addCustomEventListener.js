export const addCustomEventListener = (eventType, handler, options = {}) => {
    const { element = document.body, once = false } = options;
    element.addEventListener(eventType, handler, {
        once,
    });
    return () => element.removeEventListener(eventType, handler);
};
//# sourceMappingURL=addCustomEventListener.js.map