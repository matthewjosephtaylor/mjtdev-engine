import React from "react";
import type { ReactNode } from "react";
import { Click } from "./Click";
import { Grid } from "./Grid";

export type MenuItems = MenuItem[];
export type MenuItem = [
  content: ReactNode,
  action: () => void,
  toolTip?: ReactNode
];

export const Menu = ({
  items,
  direction = "row",
  className = "menu",
}: {
  className?: string;
  direction?: "row" | "column";
  items: MenuItems;
}) => {
  const cells = items.map((item, index) => {
    const [content, action, tooltip] = item;
    return (
      <Click
        action={(e) => {
          e.preventDefault();
          action();
        }}
        tooltip={tooltip}
        key={index}
      >
        {content}
      </Click>
    );
  });

  return (
    <Grid
      className={className}
      style={{ width: "max-content", height: "max-content" }}
      direction={direction}
      cellSize="max-content"
    >
      {cells}
    </Grid>
  );
};
