import { useEffect, useRef } from "react";
import { addCustomEventListener } from "./addCustomEventListener";
export function useCustomEventListener(eventType, action, options = {
    once: false,
    element: document.body,
}) {
    const { element } = options;
    const actionRef = useRef(action);
    useEffect(() => {
        actionRef.current = action;
    }, [action]);
    useEffect(() => {
        if (element == null) {
            return;
        }
        return addCustomEventListener(eventType, (e) => actionRef.current(e), options);
    }, [eventType, element]);
}
//# sourceMappingURL=useCustomEventListener.js.map