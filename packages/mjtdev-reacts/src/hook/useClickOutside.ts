import { isUndefined } from "@mjtdev/object";
import { useState } from "react";
import { useEventListener } from "./useEventListener";

export function useClickOutside(
  ref: React.MutableRefObject<HTMLElement | Document>,
  action: (e: Event) => void,
  options = {
    ignoreFirstClick: true,
    outside: document,
  }
) {
  const { outside, ignoreFirstClick } = options;
  const [count, setCount] = useState(0);
  useEventListener(
    "click",
    (e) => {
      setCount((c) => c + 1);
      if (isUndefined(ref.current)) {
        return;
      }
      if (e.target instanceof Node) {
        const current = ref.current;
        if (current.contains(e.target)) {
          return;
        }
        if (ignoreFirstClick && count < 1) {
          return;
        }
        action(e);
      }
    },
    outside
  );
}
