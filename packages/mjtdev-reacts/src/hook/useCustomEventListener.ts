import { useEffect, useRef } from "react";
import { addCustomEventListener } from "./addCustomEventListener";

export function useCustomEventListener<E extends string = string, T = unknown>(
  eventType: E,
  action: (e: CustomEvent<T>) => void,

  options: {
    element: HTMLElement | Document | Window;
    once: boolean;
  } = {
    once: false,
    element: document.body,
  }
) {
  const { element } = options;
  const actionRef = useRef(action);

  useEffect(() => {
    actionRef.current = action;
  }, [action]);

  useEffect(() => {
    if (element == null) {
      return;
    }
    return addCustomEventListener<E, T>(
      eventType,
      (e) => actionRef.current(e),
      options
    );
  }, [eventType, element]);
}
