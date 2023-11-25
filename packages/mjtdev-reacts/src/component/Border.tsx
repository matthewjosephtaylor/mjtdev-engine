import React, {
  CSSProperties,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { Grid } from "./Grid";
import { isDefined, isUndefined } from "@mjtdev/object";
import { ControlBar } from "./ControlBar";

export const Border = ({
  title,
  children,
  style = {},
  defaultDisclosed = true,
  collapsable = false,
  onDiscloserChange = () => {},
  alwaysShowChildren = false,
  resizable = true,
  onResize = () => {},
}: {
  onResize?: (bbox: DOMRect) => void;
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
  const contentRef = useRef<HTMLDivElement>();
  useEffect(() => {
    if (isUndefined(contentRef.current)) {
      return;
    }
    const observer = new ResizeObserver(() => {
      if (isUndefined(contentRef.current)) {
        return;
      }
      const bbox = contentRef.current.getBoundingClientRect();
      onResize(bbox);
    });
    observer.observe(contentRef.current);
    return () => {
      observer.disconnect();
    };
  }, [contentRef]);
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
        <span style={{ marginLeft: "0.5em" }}>
          {collapsable ? disclosureTriangle : undefined}
        </span>
      </Grid>
    </div>
  );
  const resizableStyle: CSSProperties = resizable
    ? { resize: "both", overflow: "auto" }
    : {};
  const legendDisplay = isDefined(title) ? (
    <legend style={{ userSelect: "none" }}>{titleDisplay}</legend>
  ) : undefined;
  return (
    <fieldset
      style={{
        width: "fit-content",
        height: "fit-content",
        ...style,
      }}
    >
      {legendDisplay}
      {alwaysShowChildren || disclosed ? (
        <div ref={contentRef} style={resizableStyle}>
          {children}
        </div>
      ) : undefined}
    </fieldset>
  );
};
