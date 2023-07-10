
export const dispatchCustomEvent = <T>(
  eventType: string,
  payload: T,
  element: HTMLElement | Document | Window = document.body
) => {
  element.dispatchEvent(
    new CustomEvent(eventType, {
      detail: payload,
    })
  );
};
