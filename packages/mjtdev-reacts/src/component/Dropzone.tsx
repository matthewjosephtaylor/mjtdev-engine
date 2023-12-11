import React, { ReactNode, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { MaterialIconCodes } from "../type/MaterialIconCodes";
import { HighlightableIcon } from "./HighlightableIcon";

export function Dropzone({
  action,
  iconCode,
  iconSize,
  highlightedIconCode,
  activeText = "Drop Here...",
  inactiveText = "Drag or Click",
}: {
  action: (files: File[]) => void;
  iconCode?: keyof MaterialIconCodes;
  highlightedIconCode?: keyof MaterialIconCodes;
  iconSize?: string;
  activeText?: string;
  inactiveText?: string;
}) {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    action(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <HighlightableIcon
          iconSize={iconSize}
          iconCode={iconCode}
          highlightedIconCode={highlightedIconCode}
          text={activeText}
          highlighted={true}
        />
      ) : (
        <HighlightableIcon
          iconSize={iconSize}
          iconCode={iconCode}
          highlightedIconCode={highlightedIconCode}
          text={inactiveText}
        />
      )}
    </div>
  );
}
