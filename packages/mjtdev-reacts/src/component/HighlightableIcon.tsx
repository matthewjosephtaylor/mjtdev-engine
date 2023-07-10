import React from "react";
import { MaterialIconCodes } from "../type/MaterialIconCodes";
import { Grid } from "./Grid";
import { Icon } from "./Icon";

export const HighlightableIcon = ({
  text,
  highlighted = false,
  iconCode = "add_a_photo",
  highlightedIconCode = "file_upload",
  iconSize = "10em",
}: {
  iconSize?: string;
  iconCode?: keyof MaterialIconCodes;
  highlightedIconCode?: keyof MaterialIconCodes;
  highlighted?: boolean;
  text: string;
}) => {
  const code = highlighted ? highlightedIconCode : iconCode;
  return (
    <Grid direction="row" cellSize="fit-content">
      <Icon
        code={code}
        style={{
          margin: "auto",
          fontSize: iconSize,
          height: "auto",
        }}
      />
      <p style={{ margin: "auto" }}>{text}</p>
    </Grid>
  );
};
