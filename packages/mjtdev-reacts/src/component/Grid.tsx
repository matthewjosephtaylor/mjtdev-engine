import { isDefined } from "@mjtdev/object";
import React, { Children } from "react";
import { ReactNode } from "react";

export const Grid = ({
  children,
  direction = "column",
  count = Children.count(children),
  style,
  className,
  cellSize = "1fr",
  gap,
}: {
  gap?: string;
  cellSize?: string | string[];
  className?: string;
  count?: number;
  style?: React.CSSProperties;
  direction?: "row" | "column";
  children?: ReactNode;
}) => {
  const templateParams =
    typeof cellSize === "string"
      ? `repeat(${count},${cellSize})`
      : cellSize.join(" ");
  const classNames = [
    "grid-layout",
    ...(isDefined(className) ? [className] : []),
  ].join(" ");
  return (
    <div
      className={classNames}
      // className={"grid-layout"}
      style={{
        ...style,
        display: "grid",
        gap,
        gridTemplateColumns:
          direction === "column" ? templateParams : undefined,
        gridTemplateRows: direction === "row" ? templateParams : undefined,
      }}
    >
      {children}
    </div>
  );
};
