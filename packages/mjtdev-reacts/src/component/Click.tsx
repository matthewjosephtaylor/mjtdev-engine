import { isDefined, isUndefined } from "@mjtdev/object";
import React, { ReactChild, ReactNode, useState } from "react";
import { useAddToDesk } from "../hook/useAddToDesk";
import { useNav } from "../hook/useNav";
import { Hover } from "./Hover";

export const Click = ({
  children,
  to,
  open,
  openId,
  tooltip,
  tooltipDelayMills = 200,
  action,
  contextMenu,
}: {
  action?: (e: React.MouseEvent) => void;
  open?: ReactNode;
  openId?: string;
  tooltipDelayMills?: number;
  tooltip?: ReactChild;
  contextMenu?: ReactChild;
  to?: string;
  children?: ReactNode;
}) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [shouldHideTooltip, setShouldHideTooltip] = useState(true);

  const [showContextMenu, setShowContextMenu] = useState(false);

  const [showTimeHandle, setShowTimeHandle] =
    useState<ReturnType<typeof setTimeout>>();
  const [hideTimeHandle, setHideTimeHandle] =
    useState<ReturnType<typeof setTimeout>>();

  const navigate = useNav();
  const addToDesk = useAddToDesk();

  const click: React.MouseEventHandler = (e) => {
    setShowTooltip(false);
    if (isDefined(to)) {
      navigate(to);
    }
    if (isDefined(open)) {
      addToDesk(open, openId);
    }
    if (isDefined(action)) {
      action(e);
    }
  };

  const contextClick: React.MouseEventHandler = (e) => {
    setShowContextMenu(false);
  };

  const auxClick: React.MouseEventHandler = (e) => {
    if (e.button === 1) {
      setShowTooltip(true);
      setShouldHideTooltip(false);
    }
  };

  const contextMenuClick: React.MouseEventHandler = (e) => {
    if (isDefined(contextMenu)) {
      e.preventDefault();
      setShowTooltip(false);
      setShouldHideTooltip(true);
      setShowContextMenu(true);
    }
  };

  const mouseEnter: React.MouseEventHandler = (e) => {
    if (isUndefined(tooltip)) {
      return;
    }

    clearTimeout(hideTimeHandle);
    setShouldHideTooltip(true);
    const handle = setTimeout(() => {
      setShowTooltip(true);
    }, tooltipDelayMills);
    setShowTimeHandle(handle);
  };

  const mouseLeave: React.MouseEventHandler = (e) => {
    if (shouldHideTooltip) {
      clearTimeout(showTimeHandle);
      const handle = setTimeout(() => {
        setShowTooltip(false);
      }, tooltipDelayMills);
      setHideTimeHandle(handle);
    }
  };

  return (
    <>
      <div
        className="click-item"
        onClick={click}
        onContextMenu={contextMenuClick}
        onAuxClick={auxClick}
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
      >
        {children}
      </div>
      {showTooltip && (
        <Hover className="tooltip" setShow={setShowTooltip}>
          {tooltip}
        </Hover>
      )}
      {showContextMenu && (
        <Hover setShow={setShowContextMenu}>
          <div onClick={contextClick}>{contextMenu}</div>
        </Hover>
      )}
    </>
  );
};
