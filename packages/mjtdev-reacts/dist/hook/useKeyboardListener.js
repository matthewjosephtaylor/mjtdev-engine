import { Inputs } from "@mjtdev/input";
import { useEffect } from "react";
export const useKeyboardListener = (keyActions, options) => {
    useEffect(() => {
        const animates = Inputs.listenToKey(keyActions, options);
        return () => {
            animates.abort = true;
        };
    }, []);
};
//# sourceMappingURL=useKeyboardListener.js.map