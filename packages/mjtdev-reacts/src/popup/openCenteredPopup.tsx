import { ReactNode } from "react";
import { closePopup } from "../popup/closePopup";
import { openPopup } from "../popup/openPopup";
import { CenteredPopup } from "./CenteredPopup";

export const openCenteredPopup = (
  content: ReactNode,
  options: Partial<{
    name: string;
    x: number;
    y: number;
    showFrame: boolean;
    onClose: () => void;
    escapeCloses: boolean;
  }> = {}
) => {
  const {
    escapeCloses,
    onClose: superOnClose = () => {},
    name = crypto.randomUUID(),
  } = options;

  const onClose = () => {
    closePopup(name);
    superOnClose();
  };
  return openPopup(
    <CenteredPopup options={{ escapeCloses }} name={name} onClose={onClose}>
      {content}
    </CenteredPopup>,
    { name, ...options }
  );
};
