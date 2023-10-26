import { useState } from "react";
import { closePopup } from "./closePopup";
import { Objects } from "@mjtdev/object";
import { Grid } from "../component/Grid";

export const ContextMenu = ({
  name,
  actionMap,
}: {
  actionMap: Record<string, () => void>;
  name: string;
}) => {
  const [backgroundColors, setBackgroundColors] = useState(
    {} as Record<string, string>
  );
  const items = Objects.entries(actionMap)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map((entry, index) => {
      const [name, action] = entry;
      return (
        <div
          style={{
            border: "1px solid grey",
            borderRadius: "0.2em",
            width: "min-content",
            whiteSpace: "nowrap",
            backgroundColor: backgroundColors[String(index)] || "black",
          }}
          onPointerEnter={() => {
            setBackgroundColors({ [index]: "grey" });
          }}
          onPointerLeave={() => {
            setBackgroundColors({ ...backgroundColors, [index]: "black" });
          }}
          onClick={() => {
            closePopup(name);
            action();
          }}
          key={index}
        >
          {name}
        </div>
      );
    });

  return (
    <div
      onClick={() => {
        closePopup(name);
      }}
      onPointerLeave={() => {
        closePopup(name);
      }}
    >
      <Grid
        direction="row"
        gap="0.2em"
        cellSize={"min-content"}
        style={{
          userSelect: "none",
          backgroundColor: "black",
          border: "1px solid grey",
          borderRadius: "0.2em",
          padding: "0.2em",
        }}
      >
        {items}
      </Grid>
    </div>
  );
};
