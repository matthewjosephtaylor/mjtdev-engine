import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
import { useAddToDesk } from "../hook/useAddToDesk";
import { useRemoveFromDesk } from "../hook/useRemoveFromDesk";
import { BasicWindow } from "./BasicWindow";
import { ImageDropzone } from "./ImageDropzone";
import { ImageWindow } from "./ImageWindow";
export const OpenImageWindow = () => {
    const remove = useRemoveFromDesk();
    const add = useAddToDesk();
    const action = (files) => {
        add(_jsx(ImageWindow, { src: files[0] }));
        remove();
    };
    const [content, setContent] = useState(_jsx(ImageDropzone, { action: action }));
    return _jsx(BasicWindow, { title: "Open Image", children: content });
};
//# sourceMappingURL=OpenImageWindow.js.map