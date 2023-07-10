import { isDefined } from "@mjtdev/object";
import React, { ReactNode } from "react";

export const Center = ({
  children,
  className,
  style = {},
}: {
  className?: string;
  children?: ReactNode;
  style?: React.CSSProperties;
}) => {
  const classNames = isDefined(className) ? [className] : [];
  return (
    <div
      className={["center", ...classNames].join(" ")}
      style={{
        display: "grid",
        gridTemplateRows: "repeat(3,auto)",
        ...style,
      }}
    >
      <div />
      <div style={{ margin: "auto" }}>{children}</div>
      <div />
    </div>
  );
};
