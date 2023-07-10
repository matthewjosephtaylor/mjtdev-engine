import { isDefined } from "@mjtdev/object";
import React from "react";
import { MaterialIconCodes } from "../type/MaterialIconCodes";
import { ReactCssProperties } from "../type/ReactTypes";

/** requires material-icon 'google' font
 *
 *  @import url(https://fonts.googleapis.com/css2?family=Material+Icons);
 */
export const Icon = ({
  children,
  style,
  onClick,
  code,
}: {
  code?: keyof MaterialIconCodes;
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  children?: keyof MaterialIconCodes;
  style?: ReactCssProperties;
}) => {
  const pointerEvents = isDefined(onClick) ? "auto" : "none";
  const cursor = isDefined(onClick) ? "pointer" : "default";
  return (
    <span
      onClick={onClick}
      className="material-icons"
      style={{
        // height: "1em",
        // width: "1em",
        // margin: "auto",
        // textAlign: "center",
        // fontSize: "1em",
        // userSelect: "none",
        pointerEvents,
        cursor,
        ...style,
      }}
    >
      {code ?? children}
    </span>
  );
};
