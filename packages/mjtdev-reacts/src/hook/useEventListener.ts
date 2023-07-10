import { iffBrowser } from "@mjtdev/object";
import { useEffect, useRef } from "react";

type CombinedEventMap = HTMLElementEventMap & WindowEventMap & DocumentEventMap;

export function useEventListener<K extends keyof CombinedEventMap>(
  eventType: K,
  action: (e: CombinedEventMap[K]) => void,
  element: HTMLElement | Document | Window = iffBrowser(() => document.body)
) {
  const actionRef = useRef(action);

  useEffect(() => {
    actionRef.current = action;
  }, [action]);

  useEffect(() => {
    if (element == null) {
      return;
    }
    const handler = (e: CombinedEventMap[K]) => actionRef.current(e);
    element.addEventListener(eventType, handler as EventListener);

    return () =>
      element.removeEventListener(eventType, handler as EventListener);
  }, [eventType, element]);
}
