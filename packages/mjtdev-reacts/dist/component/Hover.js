import { jsx as _jsx } from "react/jsx-runtime";
import { isDefined } from "@mjtdev/object";
import { useEffect, useRef, useState } from "react";
import { bestVisiblePosition } from "./bestVisiblePosition";
export const Hover = ({ setShow, children, className = "hover", }) => {
    const parentRect = useRef(null);
    const rect = useRef(null);
    // NOTE calculates bounding rect on this initial position!
    const [position, setPosition] = useState({ x: 0, y: 0 });
    useEffect(() => {
        if (!rect.current || !parentRect.current) {
            return;
        }
        const position = bestVisiblePosition(rect.current, parentRect.current);
        if (!position) {
            return;
        }
        setPosition(position);
    }, [parentRect, rect]);
    const mouseLeave = () => {
        if (isDefined(setShow)) {
            setShow(false);
        }
    };
    return (_jsx("div", { onMouseLeave: mouseLeave, ref: (e) => {
            parentRect.current = e?.parentElement?.getBoundingClientRect();
            rect.current = e?.getBoundingClientRect();
        }, className: className, style: {
            position: "fixed",
            left: position?.x,
            top: position?.y,
        }, children: children }));
};
//# sourceMappingURL=Hover.js.map