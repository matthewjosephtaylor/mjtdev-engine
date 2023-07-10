export type CustomEventHandler<T> = (event: CustomEvent<T>) => void;
export const addCustomEventListener = <E extends string = string, T = unknown>(
  eventType: E,
  handler: CustomEventHandler<T>,
  options: Partial<{
    element: HTMLElement | Document | Window;
    once: boolean;
  }> = {}
) => {
  const { element = document.body, once = false } = options;
  element.addEventListener(eventType, handler as EventListener, {
    once,
  });
  return () => element.removeEventListener(eventType, handler as EventListener);
};
