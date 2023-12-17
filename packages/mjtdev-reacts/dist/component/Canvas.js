import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
import { isDefined } from "@mjtdev/object";
export const Canvas = ({ painter, width = 1024, height = 1024, title, style, }) => {
    const ref = useRef(null);
    useEffect(() => {
        const canvas = ref.current;
        if (!canvas) {
            return;
        }
        canvas.width = width;
        canvas.height = height;
        const disposer = painter ? painter(canvas) : undefined;
        return () => {
            if (isDefined(disposer)) {
                if (disposer instanceof Promise) {
                    disposer.then((d) => d?.());
                }
                if (typeof disposer === "function") {
                    disposer();
                }
            }
        };
    }, [ref]);
    return _jsx("canvas", { title: title, style: { ...style }, ref: ref });
};
//# sourceMappingURL=Canvas.js.map