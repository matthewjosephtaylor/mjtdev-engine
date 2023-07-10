import React, { ReactNode, useState } from "react";
import { useAddToDesk } from "../hook/useAddToDesk";
import { useRemoveFromDesk } from "../hook/useRemoveFromDesk";
import { BasicWindow } from "./BasicWindow";
import { ImageDropzone } from "./ImageDropzone";
import { ImageWindow } from "./ImageWindow";

export const OpenImageWindow = () => {
  const remove = useRemoveFromDesk();
  const add = useAddToDesk();
  const action = (files: File[]) => {
    add(<ImageWindow src={files[0]} />);
    remove();
  };
  const [content, setContent] = useState<ReactNode>(
    <ImageDropzone action={action} />
  );

  return <BasicWindow title="Open Image">{content}</BasicWindow>;
};
