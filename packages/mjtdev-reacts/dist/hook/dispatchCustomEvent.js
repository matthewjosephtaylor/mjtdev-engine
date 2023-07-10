export const dispatchCustomEvent = (eventType, payload, element = document.body) => {
    element.dispatchEvent(new CustomEvent(eventType, {
        detail: payload,
    }));
};
//# sourceMappingURL=dispatchCustomEvent.js.map