import React, { ReactNode } from "react";


export const Drag = (props: {
  dataType?: string;
  data?: string;
  children: ReactNode;
  className?: string;
  dropped?: (event: React.DragEvent<HTMLDivElement>) => void;
}) => {
  const {
    className, dataType = "text/plain", data, children, dropped = () => { },
  } = props;
  return (
    <div
      className={className}
      draggable={true}
      onDragStart={(event) => {
        event.dataTransfer.setData(dataType, data);
      }}
      onDrop={(event) => {
        dropped(event);
      }}
    >
      {children}
    </div>
  );
};
