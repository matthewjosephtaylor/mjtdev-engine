import { PopupContentDisplay } from "./PopupContentDisplay";
import { updatePopup } from "./updatePopup";
import { usePopupState } from "./usePopupState";
import { findMovingPopup } from "./findMovingPopup";
import { Reacts } from "../Reacts";
import { Objects, isDefined } from "@mjtdev/object";

export const PopupDisplay = () => {
  const { x, y, popups } = usePopupState();

  Reacts.useEventListener("pointermove", (evt) => {
    const [name, popupState] = findMovingPopup() || [];
    if (!name || !popupState) {
      return;
    }
    const { x, y, offsetX, offsetY, moveEnabled } = popupState;
    if (!moveEnabled) {
      return;
    }
    const updatedX = evt.x - (offsetX || 0);
    const updatedY = evt.y - (offsetY || 0);

    updatePopup(name, { ...popupState, x: updatedX, y: updatedY });
  });
  Reacts.useEventListener("pointerup", (evt) => {
    const [name] = findMovingPopup() || [];
    if (isDefined(name)) {
      updatePopup(name, { moveEnabled: false });
    }
  });

  const items = Objects.entries(popups).map((entry, index) => {
    const [name, state] = entry;
    const { x, y, content, right, moveEnabled, visible, showFrame } = state;
    return (
      <div
        key={index}
        style={{
          visibility: visible ? "visible" : "hidden",
          left: x,
          top: y,
          right,
          position: "absolute",
          zIndex: 1000 + index,
        }}
      >
        <PopupContentDisplay
          showFrame={showFrame ?? true}
          content={content}
          x={x ?? 0}
          y={y ?? 0}
          name={name}
          moveEnabled={moveEnabled ?? true}
        />
      </div>
    );
  });

  return <>{items}</>;
};
