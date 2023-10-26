import { Grid } from "../component/Grid";
import { closePopup } from "./closePopup";
import { updatePopup } from "./updatePopup";
import { ReactNode } from "react";

export const PopupContentDisplay = ({
  name,
  moveEnabled,
  x,
  y,
  content,
  showFrame,
}: {
  showFrame: boolean;
  content: ReactNode;
  x: number;
  y: number;
  name: string;
  moveEnabled: boolean;
}) => {
  const topFrame = showFrame ? (
    <Grid
      cellSize={["min-content", "1fr", "min-content"]}
      style={{ userSelect: "none", border: "1px solid white" }}
    >
      <span style={{ fontSize: "16px" }}>≡</span>
      <div> </div>
      <input type="button" onClick={() => closePopup(name)} value="X" />
    </Grid>
  ) : (
    <></>
  );
  return (
    <div
      onPointerDown={(evt) => {
        if (!showFrame) {
          updatePopup(name, {
            moveEnabled: true,
            offsetX: evt.clientX - x,
            offsetY: evt.clientY - y,
          });
        }
      }}
    >
      <Grid direction="row" cellSize={"min-content"}>
        <div
          style={{
            textAlign: "center",
            userSelect: "none",
            backgroundColor: moveEnabled ? "grey" : "black",
            // border: "1px solid white",
          }}
          onPointerDown={(evt) => {
            updatePopup(name, {
              moveEnabled: true,
              offsetX: evt.clientX - x,
              offsetY: evt.clientY - y,
            });
          }}
        >
          {topFrame}
        </div>
        {content}
      </Grid>
    </div>
  );
};
