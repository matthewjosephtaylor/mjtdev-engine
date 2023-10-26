import React, { CSSProperties, ReactNode, useState } from "react";
import { Grid } from "./Grid";

export const Border = ({
  title = "",
  children,
  style = {},
  defaultDisclosed = true,
  collapsable = false,
  onDiscloserChange = () => {},
  alwaysShowChildren = false,
  resizable = true,
}: {
  resizable?: boolean;
  defaultDisclosed?: boolean;
  collapsable?: boolean;
  style?: React.CSSProperties;
  title?: ReactNode;
  children?: ReactNode;
  alwaysShowChildren?: boolean;
  onDiscloserChange?: (disclosed: boolean) => void;
}) => {
  const [disclosed, setDisclosed] = useState(defaultDisclosed);
  const disclosureTriangle = disclosed ? "▼" : "▶";
  const titleDisplay = (
    <div
      onClick={() => {
        if (!collapsable) {
          return;
        }
        onDiscloserChange(!disclosed);
        setDisclosed(!disclosed);
      }}
    >
      <Grid direction="column" gap="0.1em" cellSize={"min-content"}>
        {title}
        {collapsable ? disclosureTriangle : undefined}
      </Grid>
    </div>
  );
  const resizableStyle: CSSProperties = resizable
    ? { resize: "both", overflow: "auto" }
    : {};
  return (
    <fieldset
      style={{
        width: "fit-content",
        height: "fit-content",
        ...style,
      }}
    >
      <legend style={{ userSelect: "none" }}>{titleDisplay}</legend>
      {alwaysShowChildren || disclosed ? (
        <div style={resizableStyle}>{children}</div>
      ) : undefined}
    </fieldset>
  );
};
