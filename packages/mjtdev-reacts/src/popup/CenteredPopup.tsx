import { ReactNode, useEffect, useRef } from "react";
import { centerPopup } from "../popup/centerPopup";
import { useKeyboardListener } from "../hook/useKeyboardListener";

export const CenteredPopup = ({
  name,
  onClose,
  children,
  options = {},
}: {
  children: ReactNode;
  name: string;
  onClose: () => void;
  options?: Partial<{ escapeCloses: boolean }>;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { escapeCloses = true } = options;
  if (escapeCloses) {
    useKeyboardListener(
      {
        ESCAPE: () => {
          onClose();
        },
      },
      // {
      //   parent: ref.current,
      // }
    );
  }

  useEffect(() => {
    if (!ref.current) {
      return;
    }
    const center = () => {
      if (!ref.current) {
        return;
      }
      centerPopup(name, ref.current);
    };
    center();
    const observer = new ResizeObserver(center);
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return <div ref={ref}>{children}</div>;
};
