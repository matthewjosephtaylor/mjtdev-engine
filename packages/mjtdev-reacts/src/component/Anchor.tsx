import { first } from "@mjtdev/object";
import React, {
  MouseEventHandler,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { Icon, useEventListener } from "..";
import { px } from "../util/px";
import { isMouseLayerEvent } from "./type/MouseLayerEvent";

export const Anchor = ({
  style = {},
  onDiff = () => {},
  parentContent,
}: {
  parentContent?: ReactNode;
  onDiff?: (x: number, y: number, reset: () => void) => void;
  style?: React.CSSProperties;
}) => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const [pageX, setPageX] = useState(0);
  const [pageY, setPageY] = useState(0);
  const ref = useRef<HTMLDivElement>();
  useEffect(() => {
    move();
  });
  const [parentWidth, setParentWidth] = useState(0);
  const [parentHeight, setParentHeight] = useState(0);

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      const parent = first(entries);
      const { width, height } = parent.contentRect;
      if (parentWidth !== width || parentHeight !== height) {
        setParentWidth(width);
        setParentHeight(height);
        reset();
      }
    });
    observer.observe(ref.current.parentElement);
  }, [ref]);
  const reset = () => {
    const parentBB = ref.current.parentElement.getBoundingClientRect();
    const bb = ref.current.getBoundingClientRect();
    setLeft(px(parentBB.width - bb.width / 2));
    setTop(px(parentBB.height - bb.height / 2));
  };

  useEffect(() => {
    reset();
  }, [parentWidth, parentHeight, parentContent]);

  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const [left, setLeft] = useState<string | number>(style.left);
  const [top, setTop] = useState<string | number>(style.top);

  const [moveEnabled, setMoveEnabled] = useState(false);

  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const move = () => {
    const l = Math.max(mouseX - offsetX);
    const t = Math.max(mouseY - offsetY);
    if (moveEnabled) {
      setLeft(`${l}px`);
      setTop(`${t}px`);
    }
  };

  useEventListener(
    "mousemove",
    (e) => {
      const parent = ref.current.parentElement;
      const bb = parent.getBoundingClientRect();
      const { x, y } = bb;
      setMouseX(e.clientX - x);
      setMouseY(e.clientY - y);
      setPageX(e.pageX);
      setPageY(e.pageY);
    },
    document.body
  );

  useEventListener(
    "mouseup",
    (e) => {
      if (moveEnabled) {
        onDiff(pageX - startX, pageY - startY, reset);
        reset();
      }
      setMoveEnabled(false);
    },
    document.body
  );

  const mouseDown: MouseEventHandler = (e) => {
    const nativeEvent = e.nativeEvent;
    if (isMouseLayerEvent(nativeEvent) && !moveEnabled) {
      setOffsetX(nativeEvent.offsetX);
      setOffsetY(nativeEvent.offsetY);
      setStartX(e.pageX);
      setStartY(e.pageY);
    }
    setMoveEnabled(true);
  };

  return (
    <div
      ref={ref}
      onMouseDown={mouseDown}
      style={{ ...style, position: "absolute", left, top }}
      className="anchor"
    >
      <Icon code="drag_handle"></Icon>
    </div>
  );
};