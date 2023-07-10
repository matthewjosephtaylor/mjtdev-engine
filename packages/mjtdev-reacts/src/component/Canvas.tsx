import { useCallback, useEffect, useRef } from "react";
import { CanvasPainter } from "./type/CanvasPainter";

export const Canvas = ({
  painter,
  width = 1024,
  height = 1024,
  style,
}: {
  style?: React.CSSProperties;
  width?: number;
  height?: number;
  painter: CanvasPainter;
}) => {
  // const disposeRef = useRef<() => void>();

  const ref = useRef<HTMLCanvasElement>();

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

  return <canvas style={{ ...style }} ref={ref}></canvas>;
};
