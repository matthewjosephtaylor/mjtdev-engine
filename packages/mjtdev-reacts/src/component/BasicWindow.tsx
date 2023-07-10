import React, { ReactNode } from "react";
import { useRemoveFromDesk } from "../hook/useRemoveFromDesk";
import { ReactCssProperties } from "../type/ReactTypes";
import { Win } from "./Win";


export const BasicWindow = ({
  title,
  children,
  left = "10vw",
  top = "30vh",
  resizeable,
  style,
}: {
  style?: ReactCssProperties;
  left?: string;
  top?: string;
  title?: string;
  children?: ReactNode;
  resizeable?: boolean;
}) => {
  const removeFromDesk = useRemoveFromDesk();

  return (
    <Win
      title={title}
      controls={[["close", removeFromDesk]]}
      style={{ ...style, left, top }}
      resizeable={resizeable}
    >
      {children}
    </Win>
  );
};
