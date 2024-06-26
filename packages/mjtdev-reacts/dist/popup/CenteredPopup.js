import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
import { centerPopup } from "../popup/centerPopup";
import { useKeyboardListener } from "../hook/useKeyboardListener";
export const CenteredPopup = ({ name, onClose, children, options = {}, }) => {
    const ref = useRef(null);
    const { escapeCloses = true } = options;
    if (escapeCloses) {
        useKeyboardListener({
            ESCAPE: () => {
                onClose();
            },
        });
    }
    useEffect(() => {
        if (!ref.current) {
            return;
        }
        const center = () => {
            if (!ref.current) {
                return;
            }
            centerPopup(name, ref.current);
        };
        center();
        const observer = new ResizeObserver(center);
        observer.observe(ref.current);
        return () => {
            observer.disconnect();
        };
    }, [ref]);
    return _jsx("div", { ref: ref, children: children });
};
//# sourceMappingURL=CenteredPopup.js.map