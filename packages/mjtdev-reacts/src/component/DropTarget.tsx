import React, { ReactNode } from "react";

export const DropTarget = (props: {
  children: ReactNode;
  action?: (data: string) => void;
  dataType?: string;
  dropEffect?: "copy" | "link" | "move" | "none";
}) => {
  const {
    children,
    action = () => {},
    dataType = "text/plain",
    dropEffect = "copy",
  } = props;
  return (
    <div
      onDragOver={(event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = dropEffect;
      }}
      onDrop={(event) => {
        event.preventDefault();
        const data = event.dataTransfer.getData(dataType);
        action(data);
      }}
    >
      {children}
    </div>
  );
};
