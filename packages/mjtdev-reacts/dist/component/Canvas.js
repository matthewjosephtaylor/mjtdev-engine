import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
export const Canvas = ({ painter, width = 1024, height = 1024, style, }) => {
    // const disposeRef = useRef<() => void>();
    const ref = useRef();
    // const cb = useCallback(
    //   (canvas: HTMLCanvasElement) => {
    //     if (!canvas) {
    //       return;
    //     }
    //     canvas.width = width;
    //     canvas.height = height;
    //     const disposerPromise = painter(canvas);
    //     disposeRef.current = () => {
    //       disposerPromise.then((d) => d());
    //     };
    //   },
    //   [painter]
    // );
    useEffect(() => {
        console.log("mounted");
        const canvas = ref.current;
        if (!canvas) {
            console.log("no canvas");
            return;
        }
        canvas.width = width;
        canvas.height = height;
        const disposerPromise = painter(canvas);
        // disposeRef.current = () => {
        // };
        return () => {
            console.log("unmounted");
            disposerPromise.then((d) => d());
            // disposeRef?.current();
        };
    }, [ref]);
    return _jsx("canvas", { style: { ...style }, ref: ref });
};
//# sourceMappingURL=Canvas.js.map