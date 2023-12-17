import { useEffect, useRef } from "react";
import { CanvasPainter } from "./type/CanvasPainter";
import { isDefined } from "@mjtdev/object";

export const Canvas = ({
  painter,
  width = 1024,
  height = 1024,
  title,
  style,
}: {
  title?: string;
  style?: React.CSSProperties;
  width?: number;
  height?: number;
  painter?: CanvasPainter;
}) => {
  const ref = useRef<HTMLCanvasElement>(null);

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

  return <canvas title={title} style={{ ...style }} ref={ref}></canvas>;
};
