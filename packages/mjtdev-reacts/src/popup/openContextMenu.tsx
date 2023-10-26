import { ActionMap } from "./ActionMap";
import { ContextMenu } from "./ContextMenu";
import { openPopup } from "./openPopup";

export const openContextMenu = (
  event: React.MouseEvent,
  actionMap: ActionMap
) => {
  event.preventDefault();
  const name = "context-menu";
  openPopup(<ContextMenu actionMap={actionMap} name={name} />, {
    name,
    showFrame: false,
    x: event.clientX - 3,
    y: event.clientY - 3,
  });
};
