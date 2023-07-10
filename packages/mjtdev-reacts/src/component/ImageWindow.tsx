import React, { ReactNode, useState } from "react";
import { useEffect } from "react";
import { BasicWindow } from "./BasicWindow";
import { Images } from "@mjtdev/image";


export const ImageWindow = ({ src }: { src: ImageSrc; }) => {
  const [content, setContent] = useState<ReactNode>(<>Loading...</>);
  const update = async (s: ImageSrc) => {
    const ab = await s.arrayBuffer();
    const srcString = await Images.toSrcString(ab);
    setContent(<img src={srcString} />);
  };
  useEffect(() => {
    update(src);
  }, [src]);
  return <BasicWindow title={`${src.name} ${src.type}`}>{content}</BasicWindow>;
};
type ImageSrc = File;
