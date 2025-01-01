import { isDefined } from "@mjtdev/object";
import type { ReactNode } from "react";
import type React from "react";
import { useEffect, useRef, useState } from "react";
import { bestVisiblePosition } from "./bestVisiblePosition";

type Position = { x: number | string; y: number | string };

export const Hover = ({
  setShow,
  children,
  className = "hover",
}: {
  className?: string;
  setShow?: React.Dispatch<React.SetStateAction<boolean>>;
  children: ReactNode;
}) => {
  const parentRect = useRef<DOMRect | null | undefined>(null);
  const rect = useRef<DOMRect | null | undefined>(null);

  // NOTE calculates bounding rect on this initial position!
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  useEffect(() => {
    if (!rect.current || !parentRect.current) {
      return;
    }
    const position = bestVisiblePosition(rect.current, parentRect.current);
    if (!position) {
      return;
    }
    setPosition(position);
  }, [parentRect, rect]);

  const mouseLeave = () => {
    if (isDefined(setShow)) {
      setShow(false);
    }
  };

  return (
    <div
      onMouseLeave={mouseLeave}
      ref={(e) => {
        parentRect.current = e?.parentElement?.getBoundingClientRect();
        rect.current = e?.getBoundingClientRect();
      }}
      className={className}
      style={{
        position: "fixed",
        left: position?.x,
        top: position?.y,
      }}
    >
      {children}
    </div>
  );
};
