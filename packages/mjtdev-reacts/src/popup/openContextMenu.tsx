import { CSSProperties } from "react";
import { ActionMap } from "./ActionMap";
import { ContextMenu } from "./ContextMenu";
import { openPopup } from "./openPopup";

export const openContextMenu = (
  event: React.MouseEvent,
  actionMap: ActionMap,
  options: Partial<{
    style?: CSSProperties;
    itemStyle?: CSSProperties;
    offsetX: number;
    offsetY: number;
  }> = {}
) => {
  event.preventDefault();
  const name = "context-menu";
  const { offsetX = -3, offsetY = -3, style, itemStyle } = options;
  openPopup(
    <ContextMenu
      style={style}
      itemStyle={itemStyle}
      actionMap={actionMap}
      name={name}
    />,
    {
      name,
      showFrame: false,
      x: event.clientX + offsetX,
      y: event.clientY + offsetY,
    }
  );
};
