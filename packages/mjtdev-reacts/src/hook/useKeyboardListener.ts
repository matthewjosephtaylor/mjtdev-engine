import { InputListenOptions, Inputs, KeyActions } from "@mjtdev/input";
import { useEffect } from "react";

export const useKeyboardListener = (
  keyActions: KeyActions,
  options?: InputListenOptions
) => {
  useEffect(() => {
    const animates = Inputs.listenToKey(keyActions, options);
    return animates.destroy;
  }, []);
};
