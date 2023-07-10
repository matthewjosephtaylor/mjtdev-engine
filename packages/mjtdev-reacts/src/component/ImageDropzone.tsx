import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { HighlightableIcon } from "./HighlightableIcon";

export function ImageDropzone({
  action,
  activeText = "Drop Here...",
  text = "Drag or Click",
}: {
  text?: string;
  activeText?: string;
  action: (files: File[]) => void;
}) {
  const onDrop = useCallback((acceptedFiles) => {
    action(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <HighlightableIcon text={activeText} highlighted={true} />
      ) : (
        <HighlightableIcon text={text} />
      )}
    </div>
  );
}
