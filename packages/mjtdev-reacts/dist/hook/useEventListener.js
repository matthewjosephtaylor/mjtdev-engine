import { iffBrowser } from "@mjtdev/object";
import { useEffect, useRef } from "react";
export function useEventListener(eventType, action, element = iffBrowser(() => document.body)) {
    const actionRef = useRef(action);
    useEffect(() => {
        actionRef.current = action;
    }, [action]);
    useEffect(() => {
        if (element == null) {
            return;
        }
        const handler = (e) => actionRef.current(e);
        element.addEventListener(eventType, handler);
        return () => element.removeEventListener(eventType, handler);
    }, [eventType, element]);
}
//# sourceMappingURL=useEventListener.js.map