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
    if (!isDefined(name)) {
      return;
    }
    const { x, y, offsetX, offsetY, moveEnabled } = popupState;
    if (!moveEnabled) {
      return;
    }
    const updatedX = evt.x - (offsetX | 0);
    const updatedY = evt.y - (offsetY | 0);

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
    const { x, y, content, moveEnabled, visible, showFrame } = state;
    return (
      <div
        key={index}
        style={{
          visibility: visible ? "visible" : "hidden",
          left: x,
          top: y,
          position: "absolute",
          zIndex: 1000 + index,
        }}
      >
        <PopupContentDisplay
          showFrame={showFrame}
          content={content}
          x={x}
          y={y}
          name={name}
          moveEnabled={moveEnabled}
        />
      </div>
    );
  });

  return <>{items}</>;
};
