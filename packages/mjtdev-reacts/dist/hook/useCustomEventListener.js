import { useEffect, useRef } from "react";
import { addCustomEventListener } from "./addCustomEventListener";
export function useCustomEventListener(eventType, action, options = {}) {
    const { 
    // once = false,
    element = document.body, deps = [], } = options;
    const actionRef = useRef(action);
    useEffect(() => {
        actionRef.current = action;
    }, [action]);
    useEffect(() => {
        if (element == null) {
            return;
        }
        return addCustomEventListener(eventType, (e) => actionRef.current(e), options);
    }, [eventType, element, ...deps]);
}
//# sourceMappingURL=useCustomEventListener.js.map