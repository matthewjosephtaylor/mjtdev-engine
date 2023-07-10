import { isUndefined } from "@mjtdev/object";
import React, { MouseEventHandler, ReactNode } from "react";
import { Grid } from "..";
import { useBringToFront } from "../hook/useBringToFront";
import { FrameControls } from "../type/FrameControls";
import { Icon } from "./Icon";
import { isMouseLayerEvent } from "./type/MouseLayerEvent";
import { WindowActions } from "./type/WindowActions";
import { useWinCtx } from "./Win";

export const ControlBar = ({
  children,
  controls = [],
  actions,
  className = "control-bar",
}: {
  className?: string;
  actions?: WindowActions;
  children?: ReactNode;
  controls?: FrameControls;
}) => {
  const winCtx = useWinCtx();
  const bringToFront = useBringToFront();

  const icons = controls.map(([name, action], index) => {
    return (
      <Icon key={index} onClick={() => action(winCtx)}>
        {name}
      </Icon>
    );
  });

  const mouseDown: MouseEventHandler = (e) => {
    if (isUndefined(actions)) {
      return;
    }
    const { setMoveEnabled, setOffsetX, setOffsetY } = actions;
    const nativeEvent = e.nativeEvent;
    if (isMouseLayerEvent(nativeEvent)) {
      setOffsetX(nativeEvent.layerX);
      setOffsetY(nativeEvent.layerY);
    }
    bringToFront();
    setMoveEnabled(true);
  };

  return (
    <div onMouseDown={mouseDown}>
      <Grid
        className={className}
        direction="column"
        gap="1em"
        cellSize={["1fr", "max-content", "1fr"]}
      >
        <span />
        <span className="title">{children}</span>
        <span style={{ textAlign: "right" }}>{icons}</span>
      </Grid>
    </div>
  );
};
