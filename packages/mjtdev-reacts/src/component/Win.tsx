import { first, iffBrowser, isDefined } from "@mjtdev/object";
import React, {
  createContext,
  CSSProperties,
  MouseEventHandler,
  ReactNode,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { UpdateWinCtx } from "../ctx/UpdateWinCtx";
import { WinCtx } from "../ctx/WinCtx";
import { useBringToFront } from "../hook/useBringToFront";
import { useEventListener } from "../hook/useEventListener";
import { useZOrder } from "../hook/useZOrder";
import { FrameControls } from "../type/FrameControls";
import { Anchor } from "./Anchor";
import { Center } from "./Center";
import { ControlBar } from "./ControlBar";
import { Grid } from "./Grid";
import { WindowActions } from "./type/WindowActions";
import { unPx } from "../util/unPx";
import { px } from "../util/px";
import { useIsFocused } from "../hook/useIsFocused";

export const WIN_CTX = createContext<WinCtx | undefined>(undefined);
export const UPDATE_WIN_CTX = createContext<UpdateWinCtx | undefined>(
  undefined
);

export const useWinCtx = () => {
  return useContext(WIN_CTX);
};
export const useUpdateWinCtx = () => {
  return useContext(UPDATE_WIN_CTX);
};

export const Win = ({
  children,
  style = {},
  title,
  controls = [],
  className,
  clickBringsToFont = true,
  resizeable = false,
}: {
  resizeable?: boolean;
  clickBringsToFont?: boolean;
  className?: string;
  children?: ReactNode;
  style?: CSSProperties;
  title?: string;
  controls?: FrameControls;
}) => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const shouldShowControlBar = isDefined(title) || controls.length > 0;

  const zOrder = useZOrder();
  const focused = useIsFocused();

  useEffect(() => {
    move();
  });

  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  //@ts-ignore
  const [left, setLeft] = useState<string | number>(style?.left);
  //@ts-ignore
  const [top, setTop] = useState<string | number>(style?.top);

  const [moveEnabled, setMoveEnabled] = useState(false);

  const [pointer, setPointer] = useState<"auto" | "none">("auto");

  const actions: WindowActions = {
    setMoveEnabled,
    setOffsetX,
    setOffsetY,
    setPointer,
  };

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
      setMouseX(e.clientX);
      setMouseY(e.clientY);
    },
    iffBrowser(() => document.body)
  );

  useEventListener(
    "mouseup",
    (e) => {
      setPointer("auto");
      setMoveEnabled(false);
    },
    iffBrowser(() => document.body)
  );

  const bringToFront = useBringToFront();

  const mouseDown: MouseEventHandler = (e) => {
    if (clickBringsToFont) {
      bringToFront();
    }
  };

  const [winCtx, setWinCtx] = useState<WinCtx>({
    actions,
  });

  const [classNames, setClassNames] = useState<string>();

  useEffect(() => {
    setClassNames(
      [
        "window",
        className,
        focused ? "focused" : "unfocused",
        resizeable ? "resizeable" : undefined,
      ]
        .filter(isDefined)
        .join(" ")
    );
  }, [focused]);

  const ref = useRef<HTMLDivElement>(null);

  const [currentWidth, setCurrentWidth] = useState<string>();
  const [currentHeight, setCurrentHeight] = useState<string>();

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      const parent = first(entries);
      if (!parent) {
        return;
      }
      const { width, height } = parent.contentRect;
      setCurrentWidth(px(width));
      setCurrentHeight(px(height));
    });

    if (!ref.current) {
      return;
    }
    observer.observe(ref.current);
  }, [ref]);

  const [width, setWidth] = useState<string>();
  const [height, setHeight] = useState<string>();

  return (
    <WIN_CTX.Provider value={winCtx}>
      <UPDATE_WIN_CTX.Provider value={setWinCtx}>
        <div
          ref={ref}
          onMouseDown={mouseDown}
          className={classNames}
          style={{
            ...style,
            position: "fixed",
            left,
            top,
            width,
            height,
            zIndex: zOrder,
            pointerEvents: pointer,
          }}
        >
          {shouldShowControlBar && (
            <ControlBar actions={actions} controls={controls}>
              {title}
            </ControlBar>
          )}
          {children}
          {resizeable ? (
            <Anchor
              // parentWidth={width}
              // parentHeight={height}
              parentContent={children}
              onDiff={(x, y) => {
                const updatedWidth = unPx(currentWidth) ?? 0 + x;
                const updatedHeight = unPx(currentHeight) ?? 0 + y;
                setWidth(px(updatedWidth));
                setHeight(px(updatedHeight));
                setCurrentWidth(px(updatedWidth));
                setCurrentHeight(px(updatedHeight));
              }}
            />
          ) : (
            <></>
          )}
        </div>
      </UPDATE_WIN_CTX.Provider>
    </WIN_CTX.Provider>
  );
};
